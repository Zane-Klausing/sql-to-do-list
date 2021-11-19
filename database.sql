CREATE TABLE "Checklist" (
	id SERIAL,
	task VARCHAR(250),
	status BOOLEAN
);

INSERT INTO "Checklist"
	("task", "status")
VALUES
	('Make a sandwich', FALSE),
	('Clean living room', FALSE),
	('Feed cat', FALSE);
