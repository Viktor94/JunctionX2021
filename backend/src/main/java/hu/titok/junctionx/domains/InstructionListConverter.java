package hu.titok.junctionx.domains;

import hu.titok.junctionx.domains.enums.Instruction;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import static java.util.Collections.emptyList;

@Converter
public class InstructionListConverter implements AttributeConverter<List<Instruction>, String> {
    private static final String SPLIT_CHAR = ";";
    
    @Override
    public String convertToDatabaseColumn(List<Instruction> instructionList) {
        return instructionList != null ? instructionList.stream().map(Instruction::name).collect(Collectors.joining(SPLIT_CHAR)) : "";
    }
    
    @Override
    public List<Instruction> convertToEntityAttribute(String string) {
        return string != null ?
                Arrays.stream(string.split(SPLIT_CHAR))
                        .map(Instruction::valueOf)
                        .collect(Collectors.toList()) :
                emptyList();
    }
}
