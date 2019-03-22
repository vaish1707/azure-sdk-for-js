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

export const audiodata: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "audiodata"
  ],
  mapper: {
    serializedName: "audiodata",
    type: {
      name: "Stream"
    }
  }
};
export const dataImportKind: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "dataImportKind"
  ],
  mapper: {
    serializedName: "dataImportKind",
    type: {
      name: "String"
    }
  }
};
export const description: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "description"
  ],
  mapper: {
    serializedName: "description",
    type: {
      name: "String"
    }
  }
};
export const endpointId: msRest.OperationURLParameter = {
  parameterPath: "endpointId",
  mapper: {
    required: true,
    serializedName: "endpointId",
    type: {
      name: "Uuid"
    }
  }
};
export const id: msRest.OperationURLParameter = {
  parameterPath: "id",
  mapper: {
    required: true,
    serializedName: "id",
    type: {
      name: "Uuid"
    }
  }
};
export const languagedata: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "languagedata"
  ],
  mapper: {
    serializedName: "languagedata",
    type: {
      name: "Stream"
    }
  }
};
export const locale: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "locale"
  ],
  mapper: {
    serializedName: "locale",
    type: {
      name: "String"
    }
  }
};
export const name: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "name"
  ],
  mapper: {
    serializedName: "name",
    type: {
      name: "String"
    }
  }
};
export const properties: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "properties"
  ],
  mapper: {
    serializedName: "properties",
    type: {
      name: "String"
    }
  }
};
export const transcriptions: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "transcriptions"
  ],
  mapper: {
    serializedName: "transcriptions",
    type: {
      name: "Stream"
    }
  }
};
