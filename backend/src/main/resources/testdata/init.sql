INSERT INTO QUESTION (ID, CANCER_TYPE, DESCRIPTION, SYMPTOM_TYPE, QUESTION_TYPE) VALUES (1, 'BREAST', 'Lack of sleep', 'LACK_OF_SLEEP', 'YES_NO');
INSERT INTO QUESTION (ID, CANCER_TYPE, DESCRIPTION, SYMPTOM_TYPE, QUESTION_TYPE) VALUES (2, 'BREAST', 'Coughing', 'COUGH', 'YES_NO');
INSERT INTO QUESTION (ID, CANCER_TYPE, DESCRIPTION, SYMPTOM_TYPE, QUESTION_TYPE) VALUES (3, 'BREAST', 'Skin burn', 'SKIN_CHANGE', 'YES_NO');
INSERT INTO QUESTION (ID, CANCER_TYPE, DESCRIPTION, SYMPTOM_TYPE, QUESTION_TYPE) VALUES (4, 'BREAST', 'Weight loss', 'WEIGHT_LOSS', 'YES_NO');
INSERT INTO ALARM_PROCESS (ID, ADVICE, CANCER_TYPE, FREQUENCY, INSTRUCTIONS, SYMPTOM_TYPE, URGENCY) VALUES (1,'Consult your care team about your diet!', 'BREAST', 3, 'GIVE_ADVICE', 'WEIGHT_LOSS', 'MEDIUM');

INSERT INTO QUESTION (ID, CANCER_TYPE, DESCRIPTION, SYMPTOM_TYPE, QUESTION_TYPE) VALUES (5, 'BREAST', 'Do you have a lump under the arm or along the chest wall?', 'LUMP_UNDER_ARM', 'YES_NO');
INSERT INTO ALARM_PROCESS (ID, ADVICE, CANCER_TYPE, FREQUENCY, INSTRUCTIONS, SYMPTOM_TYPE, URGENCY) VALUES (2,'Contact your care team! They have been notified!', 'BREAST', 1, 'GIVE_ADVICE;NOTIFY_CARE_TEAM', 'LUMP_UNDER_ARM', 'HIGH');
INSERT INTO ALARM_PROCESS (ID, ADVICE, CANCER_TYPE, FREQUENCY, INSTRUCTIONS, SYMPTOM_TYPE, URGENCY) VALUES (14,'Contact your care team! They have been notified!', 'BREAST', 2, 'GIVE_ADVICE;NOTIFY_CARE_TEAM', 'LUMP_UNDER_ARM', 'HIGH');

INSERT INTO QUESTION (ID, CANCER_TYPE, DESCRIPTION, SYMPTOM_TYPE, QUESTION_TYPE) VALUES (6, 'BREAST', 'Has the shape or size of your breast changed?', 'BREAST_CHANGE', 'YES_NO');
INSERT INTO ALARM_PROCESS (ID, ADVICE, CANCER_TYPE, FREQUENCY, INSTRUCTIONS, SYMPTOM_TYPE, URGENCY) VALUES (3,'Patient has experienced changes in their breast.', 'BREAST', 1, 'SEND_EMAIL;NOTIFY_CARE_TEAM', 'BREAST_CHANGE', 'MEDIUM');
INSERT INTO ALARM_PROCESS (ID, ADVICE, CANCER_TYPE, FREQUENCY, INSTRUCTIONS, SYMPTOM_TYPE, URGENCY) VALUES (15,'Contact your care team about the changes in your breast.', 'BREAST', 2, 'GIVE_ADVICE;NOTIFY_CARE_TEAM', 'BREAST_CHANGE', 'MEDIUM');

INSERT INTO QUESTION (ID, CANCER_TYPE, DESCRIPTION, SYMPTOM_TYPE, QUESTION_TYPE) VALUES (7, 'BREAST', 'Headaches, dizziness, confusion', 'HEADACHE', 'YES_NO');
INSERT INTO ALARM_PROCESS (ID, ADVICE, CANCER_TYPE, FREQUENCY, INSTRUCTIONS, SYMPTOM_TYPE, URGENCY) VALUES (4,'If your headache is not regular, take a painkiller if you would like!', 'BREAST', 1, 'GIVE_ADVICE', 'HEADACHE', 'LOW');
INSERT INTO ALARM_PROCESS (ID, ADVICE, CANCER_TYPE, FREQUENCY, INSTRUCTIONS, SYMPTOM_TYPE, URGENCY) VALUES (5,'Contact your care team about your headache!', 'BREAST', 2, 'GIVE_ADVICE', 'HEADACHE', 'MEDIUM');
INSERT INTO ALARM_PROCESS (ID, ADVICE, CANCER_TYPE, FREQUENCY, INSTRUCTIONS, SYMPTOM_TYPE, URGENCY) VALUES (6,'Seek medical help about your headache!', 'BREAST', 3, 'GIVE_ADVICE;NOTIFY_CARE_TEAM', 'HEADACHE', 'HIGH');

INSERT INTO QUESTION (ID, CANCER_TYPE, DESCRIPTION, SYMPTOM_TYPE, QUESTION_TYPE, NUMERIC_LABELS) VALUES (8, 'COMMON', 'How are you?', 'HAPPINESS', 'NUMERIC', 'Feeling terrible;Not good;Neutral;Good;Feeling great');
INSERT INTO ALARM_PROCESS (ID, ADVICE, CANCER_TYPE, FREQUENCY, INSTRUCTIONS, SYMPTOM_TYPE, URGENCY) VALUES (7,'Find some fun!', 'COMMON', 2, 'NOTIFY_CARE_TEAM', 'HAPPINESS', 'LOW');

INSERT INTO QUESTION (ID, CANCER_TYPE, DESCRIPTION, SYMPTOM_TYPE, QUESTION_TYPE, NUMERIC_LABELS) VALUES (9, 'COMMON', 'How calm and peaceful are you?', 'CALMNESS', 'NUMERIC', 'Very nervous;Nervous;Neutral;Calm;Very calm');
INSERT INTO ALARM_PROCESS (ID, ADVICE, CANCER_TYPE, FREQUENCY, INSTRUCTIONS, SYMPTOM_TYPE, URGENCY) VALUES (8,'Make sure you take some time to relax!', 'COMMON', 1, 'GIVE_ADVICE;NOTIFY_CARE_TEAM', 'CALMNESS', 'MEDIUM');
INSERT INTO ALARM_PROCESS (ID, ADVICE, CANCER_TYPE, FREQUENCY, INSTRUCTIONS, SYMPTOM_TYPE, URGENCY) VALUES (9,'Find some calm place, and try to relax!', 'COMMON', 3, 'GIVE_ADVICE', 'CALMNESS', 'MEDIUM');

INSERT INTO QUESTION (ID, CANCER_TYPE, DESCRIPTION, SYMPTOM_TYPE, QUESTION_TYPE, NUMERIC_LABELS) VALUES (10, 'COMMON', 'How energetic are you?', 'EXHAUSTED', 'NUMERIC', 'I am lethargic;Not really;Neutral;Energetic;Very energetic');
INSERT INTO ALARM_PROCESS (ID, ADVICE, CANCER_TYPE, FREQUENCY, INSTRUCTIONS, SYMPTOM_TYPE, URGENCY) VALUES (10,'Have some active rest!', 'COMMON', 2, 'GIVE_ADVICE', 'EXHAUSTED', 'MEDIUM');

INSERT INTO QUESTION (ID, CANCER_TYPE, DESCRIPTION, SYMPTOM_TYPE, QUESTION_TYPE, NUMERIC_LABELS) VALUES (11, 'COMMON', 'Are you feeling depressed?', 'DEPRESSED', 'NUMERIC', 'Very depressed;Depressed;Neutral;Not really;Not at all');
INSERT INTO ALARM_PROCESS (ID, ADVICE, CANCER_TYPE, FREQUENCY, INSTRUCTIONS, SYMPTOM_TYPE, URGENCY) VALUES (11,'Find someone to talk to!', 'COMMON', 4, 'GIVE_ADVICE', 'DEPRESSED', 'LOW');
INSERT INTO ALARM_PROCESS (ID, ADVICE, CANCER_TYPE, FREQUENCY, INSTRUCTIONS, SYMPTOM_TYPE, URGENCY) VALUES (12,'Find someone to talk to or find a psychologist!', 'COMMON', 3, 'GIVE_ADVICE;NOTIFY_CARE_TEAM', 'DEPRESSED', 'MEDIUM');
INSERT INTO ALARM_PROCESS (ID, ADVICE, CANCER_TYPE, FREQUENCY, INSTRUCTIONS, SYMPTOM_TYPE, URGENCY) VALUES (13,'Contact your care team! Visit this page to get one on one support: https://4thangel.ccf.org/', 'COMMON', 1, 'GIVE_ADVICE;NOTIFY_CARE_TEAM', 'DEPRESSED', 'HIGH');

INSERT INTO QUESTION (ID, CANCER_TYPE, DESCRIPTION, SYMPTOM_TYPE, QUESTION_TYPE) VALUES (12, 'KIDNEY', 'Have fever', 'FEVER', 'YES_NO');

INSERT INTO QUESTION (ID, CANCER_TYPE, DESCRIPTION, SYMPTOM_TYPE, QUESTION_TYPE) VALUES (13, 'KIDNEY', 'Skin burn', 'SKIN_CHANGE', 'YES_NO');

INSERT INTO USER (USER_ROLE, ID, DATE_OF_BIRTH, EMAIL, FULL_NAME, PASSWORD, PHONE_NUMBER, ROLE, MEDICAL_ONCOLOGIST, PRIMARY_CARE_PROVIDER, PRIORITY, RADIATION_ONCOLOGIST, RELATIVE_EMAIL, RELATIVE_NAME, RELATIVE_PHONE_NUMBER, SURGEON, CANCER_TYPE) VALUES('Patient', 1, '1968-05-08', 'culpaeus.johannsenite@gmail.com', 'Esteban Kovacs', 'asdasdasd', '0698364557', 'PATIENT', 'Tom Shines', '', 'LOW', '', 'culpaeus.johannsenite@gmail.com', 'Uncle Bob', '258569625', '', 'BREAST');
INSERT INTO USER (USER_ROLE, ID, DATE_OF_BIRTH, EMAIL, FULL_NAME, PASSWORD, PHONE_NUMBER, ROLE, MEDICAL_ONCOLOGIST, PRIMARY_CARE_PROVIDER, PRIORITY, RADIATION_ONCOLOGIST, RELATIVE_EMAIL, RELATIVE_NAME, RELATIVE_PHONE_NUMBER, SURGEON, CANCER_TYPE) VALUES('Patient', 3, '1968-05-08', 'culpaeus.johannsenite@gmail.com', 'Tom Cat', 'asdasdasd', '0698364557', 'PATIENT', 'Tom Bob', '', 'LOW', '', 'culpaeus.johannsenite@gmail.com', 'Uncle Bob', '258569625', '', 'KIDNEY');
INSERT INTO USER (USER_ROLE, ID, DATE_OF_BIRTH, EMAIL, FULL_NAME, PASSWORD, PHONE_NUMBER, ROLE, MEDICAL_ONCOLOGIST, PRIMARY_CARE_PROVIDER, PRIORITY, RADIATION_ONCOLOGIST, RELATIVE_EMAIL, RELATIVE_NAME, RELATIVE_PHONE_NUMBER, SURGEON, CANCER_TYPE) VALUES('Patient', 4, '1970-04-07', 'culpaeus.johannsenite@gmail.com', 'Christine Wellington', 'asdasdasd', '0698364557', 'PATIENT', 'Tom Bob', '', 'MEDIUM', '', 'culpaeus.johannsenite@gmail.com', 'Uncle Bob', '258569625', '', 'ORAL_AND_OROPHARYNGEAL');
INSERT INTO USER (USER_ROLE, ID, DATE_OF_BIRTH, EMAIL, FULL_NAME, PASSWORD, PHONE_NUMBER, ROLE, MEDICAL_ONCOLOGIST, PRIMARY_CARE_PROVIDER, PRIORITY, RADIATION_ONCOLOGIST, RELATIVE_EMAIL, RELATIVE_NAME, RELATIVE_PHONE_NUMBER, SURGEON, CANCER_TYPE) VALUES('Patient', 5, '1985-05-25', 'culpaeus.johannsenite@gmail.com', 'Ramesh Sai', 'asdasdasd', '0698364557', 'PATIENT', 'Tom Bob', '', 'HIGH', '', 'culpaeus.johannsenite@gmail.com', 'Uncle Bob', '258569625', '', 'LUNG');
INSERT INTO USER (USER_ROLE, ID, DATE_OF_BIRTH, EMAIL, FULL_NAME, PASSWORD, PHONE_NUMBER, ROLE, MEDICAL_ONCOLOGIST, PRIMARY_CARE_PROVIDER, PRIORITY, RADIATION_ONCOLOGIST, RELATIVE_EMAIL, RELATIVE_NAME, RELATIVE_PHONE_NUMBER, SURGEON, CANCER_TYPE) VALUES('Patient', 6, '1988-03-08', 'culpaeus.johannsenite@gmail.com', 'Chaem Choi', 'asdasdasd', '0698364557', 'PATIENT', 'Tom Bob', '', 'LOW', '', 'culpaeus.johannsenite@gmail.com', 'Uncle Bob', '258569625', '', 'KIDNEY');
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
INSERT INTO USER_QUESTIONS (PATIENT_ID, QUESTIONS_ID) VALUES (1, 1);
INSERT INTO USER_QUESTIONS (PATIENT_ID, QUESTIONS_ID) VALUES (1, 2);
INSERT INTO USER_QUESTIONS (PATIENT_ID, QUESTIONS_ID) VALUES (1, 3);
INSERT INTO USER_QUESTIONS (PATIENT_ID, QUESTIONS_ID) VALUES (1, 4);
INSERT INTO USER_QUESTIONS (PATIENT_ID, QUESTIONS_ID) VALUES (1, 5);
INSERT INTO USER_QUESTIONS (PATIENT_ID, QUESTIONS_ID) VALUES (1, 6);
INSERT INTO USER_QUESTIONS (PATIENT_ID, QUESTIONS_ID) VALUES (1, 7);
INSERT INTO USER_QUESTIONS (PATIENT_ID, QUESTIONS_ID) VALUES (1, 8);
INSERT INTO USER_QUESTIONS (PATIENT_ID, QUESTIONS_ID) VALUES (1, 9);
INSERT INTO USER_QUESTIONS (PATIENT_ID, QUESTIONS_ID) VALUES (1, 10);
INSERT INTO USER_QUESTIONS (PATIENT_ID, QUESTIONS_ID) VALUES (1, 11);