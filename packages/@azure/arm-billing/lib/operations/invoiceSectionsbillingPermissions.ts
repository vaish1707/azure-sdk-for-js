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
import * as Models from "../models";
import * as Mappers from "../models/invoiceSectionsbillingPermissionsMappers";
import * as Parameters from "../models/parameters";
import { BillingManagementClientContext } from "../billingManagementClientContext";

/** Class representing a InvoiceSectionsbillingPermissions. */
export class InvoiceSectionsbillingPermissions {
  private readonly client: BillingManagementClientContext;

  /**
   * Create a InvoiceSectionsbillingPermissions.
   * @param {BillingManagementClientContext} client Reference to the service client.
   */
  constructor(client: BillingManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists all billingPermissions for the caller has for a Invoice Section.
   * @param billingAccountName billing Account Id.
   * @param invoiceSectionName InvoiceSection Id.
   * @param [options] The optional parameters
   * @returns Promise<Models.InvoiceSectionsbillingPermissionsListResponse>
   */
  list(billingAccountName: string, invoiceSectionName: string, options?: msRest.RequestOptionsBase): Promise<Models.InvoiceSectionsbillingPermissionsListResponse>;
  /**
   * @param billingAccountName billing Account Id.
   * @param invoiceSectionName InvoiceSection Id.
   * @param callback The callback
   */
  list(billingAccountName: string, invoiceSectionName: string, callback: msRest.ServiceCallback<Models.BillingPermissionsListResult>): void;
  /**
   * @param billingAccountName billing Account Id.
   * @param invoiceSectionName InvoiceSection Id.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(billingAccountName: string, invoiceSectionName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BillingPermissionsListResult>): void;
  list(billingAccountName: string, invoiceSectionName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BillingPermissionsListResult>, callback?: msRest.ServiceCallback<Models.BillingPermissionsListResult>): Promise<Models.InvoiceSectionsbillingPermissionsListResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        invoiceSectionName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.InvoiceSectionsbillingPermissionsListResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/invoiceSections/{invoiceSectionName}/providers/Microsoft.Billing/billingPermissions",
  urlParameters: [
    Parameters.billingAccountName,
    Parameters.invoiceSectionName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.BillingPermissionsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
