/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

export {
  discriminators,
  FileList,
  ProjectFile,
  Resource,
  BaseResource,
  ProjectFileProperties,
  ApiError,
  ODataError,
  FileStorageInfo,
  TrackedResource,
  ProjectTask,
  ProjectTaskProperties,
  CommandProperties,
  DataMigrationService,
  ServiceSku,
  Project,
  ConnectionInfo,
  DatabaseInfo,
  ConnectToSourceMySqlTaskProperties,
  ConnectToSourceMySqlTaskInput,
  MySqlConnectionInfo,
  ConnectToSourceNonSqlTaskOutput,
  ServerProperties,
  ReportableException,
  MigrateSchemaSqlServerSqlDbTaskProperties,
  MigrateSchemaSqlServerSqlDbTaskInput,
  SqlMigrationTaskInput,
  SqlConnectionInfo,
  MigrateSchemaSqlServerSqlDbDatabaseInput,
  SchemaMigrationSetting,
  MigrateSchemaSqlServerSqlDbTaskOutput,
  MigrateSchemaSqlServerSqlDbTaskOutputMigrationLevel,
  MigrateSchemaSqlServerSqlDbTaskOutputDatabaseLevel,
  MigrateSchemaSqlServerSqlDbTaskOutputError,
  MigrateSchemaSqlTaskOutputError,
  MigrateSyncCompleteCommandProperties,
  MigrateSyncCompleteCommandInput,
  MigrateSyncCompleteCommandOutput,
  PostgreSqlConnectionInfo,
  MongoDbConnectionInfo,
  GetTdeCertificatesSqlTaskProperties,
  GetTdeCertificatesSqlTaskInput,
  FileShare,
  SelectedCertificateInput,
  GetTdeCertificatesSqlTaskOutput,
  ValidateMongoDbTaskProperties,
  MongoDbMigrationSettings,
  MongoDbDatabaseSettings,
  MongoDbCollectionSettings,
  MongoDbShardKeySetting,
  MongoDbShardKeyField,
  MongoDbThrottlingSettings,
  MongoDbMigrationProgress,
  MongoDbProgress,
  MongoDbError,
  MongoDbDatabaseProgress,
  MongoDbCollectionProgress,
  ValidateMigrationInputSqlServerSqlMITaskProperties,
  ValidateMigrationInputSqlServerSqlMITaskInput,
  MigrateSqlServerSqlMIDatabaseInput,
  BlobShare,
  ValidateMigrationInputSqlServerSqlMITaskOutput,
  DatabaseBackupInfo,
  ValidateMigrationInputSqlServerSqlDbSyncTaskProperties,
  ValidateSyncMigrationInputSqlServerTaskInput,
  MigrateSqlServerSqlDbSyncDatabaseInput,
  ValidateSyncMigrationInputSqlServerTaskOutput,
  MigratePostgreSqlAzureDbForPostgreSqlSyncTaskProperties,
  MigratePostgreSqlAzureDbForPostgreSqlSyncTaskInput,
  MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseInput,
  MigratePostgreSqlAzureDbForPostgreSqlSyncTaskOutput,
  MigrateMySqlAzureDbForMySqlSyncTaskProperties,
  MigrateMySqlAzureDbForMySqlSyncTaskInput,
  MigrateMySqlAzureDbForMySqlSyncDatabaseInput,
  MigrateMySqlAzureDbForMySqlSyncTaskOutput,
  MigrateSqlServerSqlDbSyncTaskInput,
  MigrationValidationOptions,
  MigrateSqlServerSqlDbSyncTaskProperties,
  MigrateSqlServerSqlDbSyncTaskOutput,
  MigrateSqlServerSqlDbTaskInput,
  MigrateSqlServerSqlDbDatabaseInput,
  MigrateSqlServerSqlDbTaskProperties,
  MigrateSqlServerSqlDbTaskOutput,
  MigrateSqlServerSqlMITaskInput,
  MigrateSqlServerSqlMITaskProperties,
  MigrateSqlServerSqlMITaskOutput,
  MigrateMongoDbTaskProperties,
  ConnectToTargetAzureDbForMySqlTaskProperties,
  ConnectToTargetAzureDbForMySqlTaskInput,
  ConnectToTargetAzureDbForMySqlTaskOutput,
  ConnectToTargetSqlMITaskProperties,
  ConnectToTargetSqlMITaskInput,
  ConnectToTargetSqlMITaskOutput,
  GetUserTablesSqlSyncTaskProperties,
  GetUserTablesSqlSyncTaskInput,
  GetUserTablesSqlSyncTaskOutput,
  DatabaseTable,
  GetUserTablesSqlTaskProperties,
  GetUserTablesSqlTaskInput,
  GetUserTablesSqlTaskOutput,
  ConnectToTargetSqlSqlDbSyncTaskProperties,
  ConnectToTargetSqlSqlDbSyncTaskInput,
  ConnectToTargetSqlDbTaskOutput,
  ConnectToTargetSqlDbTaskProperties,
  ConnectToTargetSqlDbTaskInput,
  ConnectToSourceSqlServerSyncTaskProperties,
  ConnectToSourceSqlServerTaskInput,
  ConnectToSourceSqlServerTaskOutput,
  ConnectToSourceSqlServerTaskProperties,
  ConnectToMongoDbTaskProperties,
  MongoDbClusterInfo,
  MongoDbDatabaseInfo,
  MongoDbObjectInfo,
  MongoDbCollectionInfo,
  MongoDbShardKeyInfo,
  MigratePostgreSqlAzureDbForPostgreSqlSyncTaskOutputDatabaseError,
  SyncMigrationDatabaseErrorEvent,
  MigratePostgreSqlAzureDbForPostgreSqlSyncTaskOutputError,
  MigratePostgreSqlAzureDbForPostgreSqlSyncTaskOutputTableLevel,
  MigratePostgreSqlAzureDbForPostgreSqlSyncTaskOutputDatabaseLevel,
  MigratePostgreSqlAzureDbForPostgreSqlSyncTaskOutputMigrationLevel,
  MigrateMySqlAzureDbForMySqlSyncTaskOutputDatabaseError,
  MigrateMySqlAzureDbForMySqlSyncTaskOutputError,
  MigrateMySqlAzureDbForMySqlSyncTaskOutputTableLevel,
  MigrateMySqlAzureDbForMySqlSyncTaskOutputDatabaseLevel,
  MigrateMySqlAzureDbForMySqlSyncTaskOutputMigrationLevel,
  MigrateSqlServerSqlDbSyncTaskOutputDatabaseError,
  MigrateSqlServerSqlDbSyncTaskOutputError,
  MigrateSqlServerSqlDbSyncTaskOutputTableLevel,
  MigrateSqlServerSqlDbSyncTaskOutputDatabaseLevel,
  MigrateSqlServerSqlDbSyncTaskOutputMigrationLevel,
  MigrateSqlServerSqlDbTaskOutputError,
  MigrateSqlServerSqlDbTaskOutputTableLevel,
  MigrateSqlServerSqlDbTaskOutputDatabaseLevel,
  DataItemMigrationSummaryResult,
  DatabaseSummaryResult,
  MigrateSqlServerSqlDbTaskOutputMigrationLevel,
  MigrationValidationResult,
  MigrationValidationDatabaseSummaryResult,
  MigrationReportResult,
  MigrateSqlServerSqlMITaskOutputError,
  MigrateSqlServerSqlMITaskOutputLoginLevel,
  MigrateSqlServerSqlMITaskOutputAgentJobLevel,
  MigrateSqlServerSqlMITaskOutputDatabaseLevel,
  MigrateSqlServerSqlMITaskOutputMigrationLevel,
  StartMigrationScenarioServerRoleResult,
  ConnectToSourceSqlServerTaskOutputAgentJobLevel,
  MigrationEligibilityInfo,
  ConnectToSourceSqlServerTaskOutputLoginLevel,
  ConnectToSourceSqlServerTaskOutputDatabaseLevel,
  DatabaseFileInfo,
  ConnectToSourceSqlServerTaskOutputTaskLevel
} from "../models/mappers";
