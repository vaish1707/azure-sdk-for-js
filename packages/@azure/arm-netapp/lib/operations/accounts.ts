/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/accountsMappers";
import * as Parameters from "../models/parameters";
import { AzureNetAppFilesManagementClientContext } from "../azureNetAppFilesManagementClientContext";

/** Class representing a Accounts. */
export class Accounts {
  private readonly client: AzureNetAppFilesManagementClientContext;

  /**
   * Create a Accounts.
   * @param {AzureNetAppFilesManagementClientContext} client Reference to the service client.
   */
  constructor(client: AzureNetAppFilesManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists all NetApp accounts in the resource group
   * @param resourceGroup The name of the resource group.
   * @param [options] The optional parameters
   * @returns Promise<Models.AccountsListResponse>
   */
  list(resourceGroup: string, options?: msRest.RequestOptionsBase): Promise<Models.AccountsListResponse>;
  /**
   * @param resourceGroup The name of the resource group.
   * @param callback The callback
   */
  list(resourceGroup: string, callback: msRest.ServiceCallback<Models.NetAppAccountList>): void;
  /**
   * @param resourceGroup The name of the resource group.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroup: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NetAppAccountList>): void;
  list(resourceGroup: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.NetAppAccountList>, callback?: msRest.ServiceCallback<Models.NetAppAccountList>): Promise<Models.AccountsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroup,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.AccountsListResponse>;
  }

  /**
   * Get the NetApp account
   * @param resourceGroup The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param [options] The optional parameters
   * @returns Promise<Models.AccountsGetResponse>
   */
  get(resourceGroup: string, accountName: string, options?: msRest.RequestOptionsBase): Promise<Models.AccountsGetResponse>;
  /**
   * @param resourceGroup The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param callback The callback
   */
  get(resourceGroup: string, accountName: string, callback: msRest.ServiceCallback<Models.NetAppAccount>): void;
  /**
   * @param resourceGroup The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroup: string, accountName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NetAppAccount>): void;
  get(resourceGroup: string, accountName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.NetAppAccount>, callback?: msRest.ServiceCallback<Models.NetAppAccount>): Promise<Models.AccountsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroup,
        accountName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.AccountsGetResponse>;
  }

  /**
   * Create or update a NetApp account
   * @param resourceGroup The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param location Resource location
   * @param [options] The optional parameters
   * @returns Promise<Models.AccountsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroup: string, accountName: string, location: string, options?: Models.AccountsCreateOrUpdateOptionalParams): Promise<Models.AccountsCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroup,accountName,location,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.AccountsCreateOrUpdateResponse>;
  }

  /**
   * Delete a NetApp account
   * @param resourceGroup The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroup: string, accountName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroup,accountName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Patch a NetApp account
   * @param resourceGroup The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param [options] The optional parameters
   * @returns Promise<Models.AccountsUpdateResponse>
   */
  update(resourceGroup: string, accountName: string, options?: Models.AccountsUpdateOptionalParams): Promise<Models.AccountsUpdateResponse>;
  /**
   * @param resourceGroup The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param callback The callback
   */
  update(resourceGroup: string, accountName: string, callback: msRest.ServiceCallback<Models.NetAppAccount>): void;
  /**
   * @param resourceGroup The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroup: string, accountName: string, options: Models.AccountsUpdateOptionalParams, callback: msRest.ServiceCallback<Models.NetAppAccount>): void;
  update(resourceGroup: string, accountName: string, options?: Models.AccountsUpdateOptionalParams | msRest.ServiceCallback<Models.NetAppAccount>, callback?: msRest.ServiceCallback<Models.NetAppAccount>): Promise<Models.AccountsUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroup,
        accountName,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.AccountsUpdateResponse>;
  }

  /**
   * Create or update a NetApp account
   * @param resourceGroup The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param location Resource location
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroup: string, accountName: string, location: string, options?: Models.AccountsBeginCreateOrUpdateOptionalParams): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroup,
        accountName,
        location,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Delete a NetApp account
   * @param resourceGroup The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroup: string, accountName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroup,
        accountName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.NetApp/netAppAccounts",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroup
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.NetAppAccountList
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.NetApp/netAppAccounts/{accountName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroup,
    Parameters.accountName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.NetAppAccount
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.NetApp/netAppAccounts/{accountName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroup,
    Parameters.accountName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: {
      tags: [
        "options",
        "tags"
      ]
    },
    mapper: {
      ...Mappers.NetAppAccountPatch,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.NetAppAccount
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.NetApp/netAppAccounts/{accountName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroup,
    Parameters.accountName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: {
      location: "location",
      tags: [
        "options",
        "tags"
      ]
    },
    mapper: {
      ...Mappers.NetAppAccount,
      required: true
    }
  },
  responses: {
    201: {
      bodyMapper: Mappers.NetAppAccount
    },
    202: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.NetApp/netAppAccounts/{accountName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroup,
    Parameters.accountName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};
