import { TProjectPermission } from "@app/lib/types";

export type TCreateIntegrationDTO = {
  secretPath: string;
  integrationAuthId: string;
  app?: string;
  isActive: boolean;
  appId?: string;
  sourceEnvironment: string;
  targetEnvironment?: string;
  targetEnvironmentId?: string;
  targetService?: string;
  targetServiceId?: string;
  owner?: string;
  url?: string;
  path?: string;
  region?: string;
  scope?: string;
  metadata?: {
    secretPrefix?: string;
    secretSuffix?: string;
    secretGCPLabel?: {
      labelName: string;
      labelValue: string;
    };
    secretAWSTag?: {
      key: string;
      value: string;
    }[];
    kmsKeyId?: string;
    shouldDisableDelete?: boolean;
  };
} & Omit<TProjectPermission, "projectId">;

export type TUpdateIntegrationDTO = {
  id: string;
  app?: string;
  appId?: string;
  isActive?: boolean;
  secretPath: string;
  targetEnvironment: string;
  owner: string;
  environment: string;
  metadata?: {
    secretPrefix?: string;
    secretSuffix?: string;
    secretGCPLabel?: {
      labelName: string;
      labelValue: string;
    };
    secretAWSTag?: {
      key: string;
      value: string;
    }[];
    kmsKeyId?: string;
    shouldDisableDelete?: boolean;
  };
} & Omit<TProjectPermission, "projectId">;

export type TDeleteIntegrationDTO = {
  id: string;
} & Omit<TProjectPermission, "projectId">;

export type TSyncIntegrationDTO = {
  id: string;
} & Omit<TProjectPermission, "projectId">;
