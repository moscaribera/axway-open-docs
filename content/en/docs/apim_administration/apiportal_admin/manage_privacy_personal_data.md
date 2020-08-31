---
title: Manage privacy and personal data
linkTitle: Manage privacy and personal data
weight: 90
date: 2019-07-30
description: Learn how API Portal supports customers subject to the General Data Protection Regulation (GDPR) to provide transparency and control in compliance with the GDPR.
---

## View audit logs

Joomla creates audit logs from the activities performed on your API Portal website. All data gathered from a user must be exportable. This does not include derived fields that were created by the organization, such as customer segmentation fields. API Portal allows JAI Administrators to view, export, and delete audit logs.

To view the list of audit logs, log in to the Joomla! Administrator Interface (JAI), and click **Users > User Actions Log**. You can filter by extension, by user, and by date or period. Sorting by all fields is also available.

![Logs table](/Images/APIPortal/user_actions_logs_table.png)

* You must enable both **Action Log- Joomla** and **Action Log - API Portal** plugins to view the list of audit logs.
* This view is available only for Super Users.

## Export and delete user data

To export, delete, or purge audit logs:

1. In JAI, click **Users > User Actions Log**.
2. Use the **search** or the **filters** to limit your search, if needed.
3. Select one or more items from the list:
    * Click either **Export Selected as CSV** to export the selected items, or **Export All as CSV** to export all items from the list.
    * Click either **Delete** to delete the selected items, or **Purge** to purge the selected items.

## Configure audit logs options

On the **User Actions Log** page, click **Options** to enable or disable the **IP logging**, select a **CSV delimiter**, and select from which components to gather the logs based on their events.

## Set the number of days to keep audit logs

To set the number of days after which the logs will be deleted:

1. In JAI, click **Extensions > Plugins**.
2. Search for **System - User Actions Log**, and click it from the list.
3. Select **Enabled** from the **Status** dropdown list.

* You must enabled the **Privacy - Action Logs** to export the action log data for user's privacy requests.

## Additional recommendations

### Define retention periods for personal data

For General Data Protection (GDP compliance, you should define retention periods within the design phase for all data fields taking into account the defined purpose. You must also include retention periods for backups.

If you are a small organization, you may not need a documented retention policy. However, if you do not have a retention policy, you should still regularly review the data you hold and delete or anonymise any data that you no longer need.

You must include your Data Protection Officer (DPO) or Legal department to define the retention periods as other laws may impact the retention requirements.

### Permanently delete unnecessary data

When the retention periods expire you have to ensure that all of the data which is no longer needed has been deleted. This may require automatic identification of the latest activities and a data deletion functionality or manual work.

### Develop a log retention policy and archival procedures

We recommend that you develop a log retention policy to identify storage requirements for device logs, and appropriate archival procedures to ensure that the audit logs are available for a security response in the case of an incident or investigation.

The audit logs must be collected for the last 30 days in easily accessible storage media. Older logs should be archived in a protected storage and should be accessible in the future as required for incidents or investigations.