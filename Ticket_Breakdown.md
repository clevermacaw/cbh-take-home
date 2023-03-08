# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

/* First Test  Ticket breakdown Answer*/



Ticket 1: Allow Facilities to add custom IDs for Agents

Description:

Facilities should be able to add/edit custom IDs for Agents they work with on our platform. These IDs will be used instead of internal database IDs in reports generated for the Facilities.

Acceptance Criteria:

A new field for custom IDs is added to the Agent model

Facilities can add/edit custom IDs for each Agent in their account

The custom ID is displayed on reports generated for the Facility

Time/Effort Estimate:

4 hours

Ticket 2: Update getShiftsByFacility function to return custom IDs

Description:

The getShiftsByFacility function needs to be updated to return the custom ID for each Agent assigned to a Shift, in addition to other metadata.

Acceptance Criteria:

The getShiftsByFacility function returns the custom ID for each Agent assigned to a Shift

If no custom ID is set, the internal database ID is returned instead

Unit tests for the updated function pass

Time/Effort Estimate:

2 hours

Ticket 3: Update generateReport function to use custom IDs

Description:

The generateReport function needs to be updated to use custom IDs instead of internal database IDs when generating reports for Facilities.

Acceptance Criteria:

The generateReport function uses the custom ID for each Agent assigned to a Shift

If no custom ID is set, the internal database ID is used instead

The custom ID is displayed on the report instead of the internal database ID

Unit tests for the updated function pass

Time/Effort Estimate:

4 hours

Ticket 4 (Optional): Add API endpoint to update custom IDs for Agents

Description:

An API endpoint needs to be added to allow Facilities to update custom IDs for Agents through an external system.

Acceptance Criteria:

An API endpoint is created to update custom IDs for Agents

Authentication and authorization is in place to ensure only authorized Facilities can update custom IDs

The custom ID is updated in the Agent model

Unit tests for the API endpoint pass

Time/Effort Estimate:

6 hours

Note: This ticket is optional as it may not be required by the client. The implementation details may vary based on the specific requirements of the API endpoint.




