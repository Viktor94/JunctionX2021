INSERT INTO QUESTION (ID, CANCER_TYPE, DESCRIPTION, SYMPTOM_TYPE, QUESTION_TYPE) VALUES (1, 'LUNG', 'Joint pains', 'COUGH', 'YES_NO');
INSERT INTO QUESTION (ID, CANCER_TYPE, DESCRIPTION, SYMPTOM_TYPE, QUESTION_TYPE) VALUES (2, 'LUNG', 'Leg or muscle cramps', 'COUGH', 'YES_NO');
INSERT INTO QUESTION (ID, CANCER_TYPE, DESCRIPTION, SYMPTOM_TYPE, QUESTION_TYPE) VALUES (3, 'LUNG', 'Unexplained weight loss', 'COUGH', 'YES_NO');
INSERT INTO QUESTION (ID, CANCER_TYPE, DESCRIPTION, SYMPTOM_TYPE, QUESTION_TYPE) VALUES (4, 'LUNG', 'Lack of restful sleep', 'COUGH', 'YES_NO');
INSERT INTO QUESTION (ID, CANCER_TYPE, DESCRIPTION, SYMPTOM_TYPE, QUESTION_TYPE) VALUES (5, 'LUNG', 'Hot flashes', 'COUGH', 'YES_NO');
INSERT INTO QUESTION (ID, CANCER_TYPE, DESCRIPTION, SYMPTOM_TYPE, QUESTION_TYPE) VALUES (6, 'LUNG', 'Skin burn', 'SKIN_CHANGE', 'YES_NO');
INSERT INTO QUESTION (ID, CANCER_TYPE, DESCRIPTION, SYMPTOM_TYPE, QUESTION_TYPE) VALUES (7, 'LUNG', 'Head pain', 'HEADACHE', 'YES_NO');
INSERT INTO QUESTION (ID, CANCER_TYPE, DESCRIPTION, SYMPTOM_TYPE, QUESTION_TYPE) VALUES (8, 'COMMON', 'How are you?', 'HAPPINESS', 'NUMERIC');
INSERT INTO QUESTION (ID, CANCER_TYPE, DESCRIPTION, SYMPTOM_TYPE, QUESTION_TYPE) VALUES (9, 'COMMON', 'Have you felt calm and peaceful?', 'CALMNESS', 'NUMERIC');
INSERT INTO QUESTION (ID, CANCER_TYPE, DESCRIPTION, SYMPTOM_TYPE, QUESTION_TYPE) VALUES (10, 'COMMON', 'Did you have a lot of energy?', 'EXHAUSTED', 'NUMERIC');
INSERT INTO QUESTION (ID, CANCER_TYPE, DESCRIPTION, SYMPTOM_TYPE, QUESTION_TYPE) VALUES (11, 'COMMON', 'Have you felt downhearted and depressed?', 'DEPRESSED', 'NUMERIC');
INSERT INTO QUESTION (ID, CANCER_TYPE, DESCRIPTION, SYMPTOM_TYPE, QUESTION_TYPE) VALUES (12, 'KIDNEY', 'Have fever', 'FEVER', 'YES_NO');
INSERT INTO QUESTION (ID, CANCER_TYPE, DESCRIPTION, SYMPTOM_TYPE, QUESTION_TYPE) VALUES (13, 'KIDNEY', 'Skin burn', 'SKIN_CHANGE', 'YES_NO');
INSERT INTO ALARM_PROCESS (ID, ADVICE, CANCER_TYPE, FREQUENCY, INSTRUCTIONS, SYMPTOM_TYPE, URGENCY) VALUES (1,'Take a painkiller', 'LUNG', 1, 'GIVE_ADVICE', 'HEADACHE', 'LOW');
INSERT INTO ALARM_PROCESS (ID, ADVICE, CANCER_TYPE, FREQUENCY, INSTRUCTIONS, SYMPTOM_TYPE, URGENCY) VALUES (2,'Go to the doctor immediately', 'LUNG', 5, 'NOTIFY_CARE_TEAM', 'HEADACHE', 'HIGH');
INSERT INTO ALARM_PROCESS (ID, ADVICE, CANCER_TYPE, FREQUENCY, INSTRUCTIONS, SYMPTOM_TYPE, URGENCY) VALUES (3,'Find some fun!', 'COMMON', 2, 'NOTIFY_CARE_TEAM', 'HAPPINESS', 'LOW');
INSERT INTO ALARM_PROCESS (ID, ADVICE, CANCER_TYPE, FREQUENCY, INSTRUCTIONS, SYMPTOM_TYPE, URGENCY) VALUES (4,'Find some calm place, and try to relax!', 'COMMON', 3, 'NOTIFY_CARE_TEAM', 'CALMNESS', 'MEDIUM');
INSERT INTO ALARM_PROCESS (ID, ADVICE, CANCER_TYPE, FREQUENCY, INSTRUCTIONS, SYMPTOM_TYPE, URGENCY) VALUES (5,'Find some calm place, and try to relax!', 'COMMON', 2, 'NOTIFY_CARE_TEAM', 'EXHAUSTED', 'HIGH');
INSERT INTO ALARM_PROCESS (ID, ADVICE, CANCER_TYPE, FREQUENCY, INSTRUCTIONS, SYMPTOM_TYPE, URGENCY) VALUES (6,'Find someone to talk!', 'COMMON', 4, 'NOTIFY_CARE_TEAM', 'DEPRESSED', 'LOW');
INSERT INTO ALARM_PROCESS (ID, ADVICE, CANCER_TYPE, FREQUENCY, INSTRUCTIONS, SYMPTOM_TYPE, URGENCY) VALUES (7,'Find someone to talk or find a psychologist!', 'COMMON', 3, 'NOTIFY_CARE_TEAM', 'DEPRESSED', 'MEDIUM');
INSERT INTO ALARM_PROCESS (ID, ADVICE, CANCER_TYPE, FREQUENCY, INSTRUCTIONS, SYMPTOM_TYPE, URGENCY) VALUES (8,'Find someone to talk. Visit this page to get one on one support: https://4thangel.ccf.org/', 'COMMON', 1, 'NOTIFY_CARE_TEAM', 'DEPRESSED', 'HIGH');
INSERT INTO USER (USER_ROLE, ID, DATE_OF_BIRTH, EMAIL, FULL_NAME, PASSWORD, PHONE_NUMBER, ROLE, MEDICAL_ONCOLOGIST, PRIMARY_CARE_PROVIDER, PRIORITY, RADIATION_ONCOLOGIST, RELATIVE_EMAIL, RELATIVE_NAME, RELATIVE_PHONE_NUMBER, SURGEON) VALUES('Patient', 1, '1968-05-08', 'culpaeus.johannsenite@gmail.com', 'Tom Cat', 'asdasdasd', '0698364557', 'PATIENT', 'Tom Bob', '', 'LOW', '', 'culpaeus.johannsenite@gmail.com', 'Uncle Bob', '258569625', '');
INSERT INTO USER (USER_ROLE, ID, DATE_OF_BIRTH, EMAIL, FULL_NAME, PASSWORD, PHONE_NUMBER, ROLE, MEDICAL_ONCOLOGIST, PRIMARY_CARE_PROVIDER, PRIORITY, RADIATION_ONCOLOGIST, RELATIVE_EMAIL, RELATIVE_NAME, RELATIVE_PHONE_NUMBER, SURGEON) VALUES('Patient', 3, '1969-11-08', 'culpaeus.johannsenite@gmail.com', 'Tom Cat2', 'asdasdasd', '0698364557', 'PATIENT', 'Tom Bob', '', 'LOW', '', 'culpaeus.johannsenite@gmail.com', 'Uncle Bob', '258569625', '');
INSERT INTO USER (USER_ROLE, ID, DATE_OF_BIRTH, EMAIL, FULL_NAME, PASSWORD, PHONE_NUMBER, ROLE, MEDICAL_ONCOLOGIST, PRIMARY_CARE_PROVIDER, PRIORITY, RADIATION_ONCOLOGIST, RELATIVE_EMAIL, RELATIVE_NAME, RELATIVE_PHONE_NUMBER, SURGEON) VALUES('Patient', 4, '1970-04-07', 'culpaeus.johannsenite@gmail.com', 'Tom Cat3', 'asdasdasd', '0698364557', 'PATIENT', 'Tom Bob', '', 'MEDIUM', '', 'culpaeus.johannsenite@gmail.com', 'Uncle Bob', '258569625', '');
INSERT INTO USER (USER_ROLE, ID, DATE_OF_BIRTH, EMAIL, FULL_NAME, PASSWORD, PHONE_NUMBER, ROLE, MEDICAL_ONCOLOGIST, PRIMARY_CARE_PROVIDER, PRIORITY, RADIATION_ONCOLOGIST, RELATIVE_EMAIL, RELATIVE_NAME, RELATIVE_PHONE_NUMBER, SURGEON) VALUES('Patient', 5, '1985-05-25', 'culpaeus.johannsenite@gmail.com', 'Tom Cat4', 'asdasdasd', '0698364557', 'PATIENT', 'Tom Bob', '', 'HIGH', '', 'culpaeus.johannsenite@gmail.com', 'Uncle Bob', '258569625', '');
INSERT INTO USER (USER_ROLE, ID, DATE_OF_BIRTH, EMAIL, FULL_NAME, PASSWORD, PHONE_NUMBER, ROLE, MEDICAL_ONCOLOGIST, PRIMARY_CARE_PROVIDER, PRIORITY, RADIATION_ONCOLOGIST, RELATIVE_EMAIL, RELATIVE_NAME, RELATIVE_PHONE_NUMBER, SURGEON) VALUES('Patient', 6, '1988-03-08', 'culpaeus.johannsenite@gmail.com', 'Tom Cat5', 'asdasdasd', '0698364557', 'PATIENT', 'Tom Bob', '', 'HIGH', '', 'culpaeus.johannsenite@gmail.com', 'Uncle Bob', '258569625', '');
INSERT INTO USER (USER_ROLE, ID, DATE_OF_BIRTH, EMAIL, FULL_NAME, ROLE) VALUES ('CareTaker', 2, '1988-05-08', 'culpaeus.johannsenite@gmail.com', 'Tom Cat', 'CARE_TAKER');
INSERT INTO USER_CARE_TAKER_LIST (PATIENT_ID, CARE_TAKER_LIST_ID) VALUES (1, 2);
INSERT INTO USER_CARE_TAKER_LIST (PATIENT_ID, CARE_TAKER_LIST_ID) VALUES (3, 2);
INSERT INTO USER_CARE_TAKER_LIST (PATIENT_ID, CARE_TAKER_LIST_ID) VALUES (4, 2);
INSERT INTO USER_CARE_TAKER_LIST (PATIENT_ID, CARE_TAKER_LIST_ID) VALUES (5, 2);
INSERT INTO USER_CARE_TAKER_LIST (PATIENT_ID, CARE_TAKER_LIST_ID) VALUES (6, 2);
INSERT INTO CARE_PLAN_FORM (ID, BLOOD_PRESSURE_STATUS, DATE_OF_SUBMIT, DIASTOLIC, LONG_ANSWER, PULSE, SYSTOLIC, WEIGHT, PATIENT_ID) VALUES (1, 'NORMAL', '2021-10-20', 23, 'I have a headache but I am fine.', 90, 120, 96, 1);
INSERT INTO CARE_PLAN_FORM (ID, BLOOD_PRESSURE_STATUS, DATE_OF_SUBMIT, DIASTOLIC, LONG_ANSWER, PULSE, SYSTOLIC, WEIGHT, PATIENT_ID) VALUES (2, 'NORMAL', '2021-10-25', 23, 'I am fine.', 92, 128, 95, 1);
INSERT INTO CARE_PLAN_FORM (ID, BLOOD_PRESSURE_STATUS, DATE_OF_SUBMIT, DIASTOLIC, LONG_ANSWER, PULSE, SYSTOLIC, WEIGHT, PATIENT_ID) VALUES (3, 'HYPERTENSIVE CRISIS', '2021-10-26', 23, 'I feel so bad.', 125, 185, 95, 1);
INSERT INTO CARE_PLAN_FORM (ID, BLOOD_PRESSURE_STATUS, DATE_OF_SUBMIT, DIASTOLIC, LONG_ANSWER, PULSE, SYSTOLIC, WEIGHT, PATIENT_ID) VALUES (4, 'NORMAL', '2021-09-19', 23, 'I have a headache but I am fine.', 90, 120, 100, 2);
INSERT INTO CARE_PLAN_FORM (ID, BLOOD_PRESSURE_STATUS, DATE_OF_SUBMIT, DIASTOLIC, LONG_ANSWER, PULSE, SYSTOLIC, WEIGHT, PATIENT_ID) VALUES (5, 'NORMAL', '2021-10-25', 23, 'I am fine.', 92, 128, 101, 2);
INSERT INTO CARE_PLAN_FORM (ID, BLOOD_PRESSURE_STATUS, DATE_OF_SUBMIT, DIASTOLIC, LONG_ANSWER, PULSE, SYSTOLIC, WEIGHT, PATIENT_ID) VALUES (6, 'NORMAL', '2021-11-12', 23, 'I feel good.', 90, 120, 100, 2);
INSERT INTO USER_QUESTIONS (PATIENT_ID, QUESTIONS_ID) VALUE (1, 1);
INSERT INTO USER_QUESTIONS (PATIENT_ID, QUESTIONS_ID) VALUE (1, 2);
INSERT INTO USER_QUESTIONS (PATIENT_ID, QUESTIONS_ID) VALUE (1, 3);
INSERT INTO USER_QUESTIONS (PATIENT_ID, QUESTIONS_ID) VALUE (1, 4);
INSERT INTO USER_QUESTIONS (PATIENT_ID, QUESTIONS_ID) VALUE (1, 5);
INSERT INTO USER_QUESTIONS (PATIENT_ID, QUESTIONS_ID) VALUE (1, 6);
INSERT INTO USER_QUESTIONS (PATIENT_ID, QUESTIONS_ID) VALUE (1, 7);
INSERT INTO USER_QUESTIONS (PATIENT_ID, QUESTIONS_ID) VALUE (1, 8);
INSERT INTO USER_QUESTIONS (PATIENT_ID, QUESTIONS_ID) VALUE (1, 9);
INSERT INTO USER_QUESTIONS (PATIENT_ID, QUESTIONS_ID) VALUE (1, 10);
INSERT INTO USER_QUESTIONS (PATIENT_ID, QUESTIONS_ID) VALUE (1, 11);