export const GROUPS = {
  CREATE: {
    name: "The name of the group to create.",
    slug: "The slug of the group to create.",
    role: "The role of the group to create."
  },
  UPDATE: {
    currentSlug: "The current slug of the group to update.",
    name: "The new name of the group to update to.",
    slug: "The new slug of the group to update to.",
    role: "The new role of the group to update to."
  },
  DELETE: {
    slug: "The slug of the group to delete"
  },
  LIST_USERS: {
    slug: "The slug of the group to list users for",
    offset: "The offset to start from. If you enter 10, it will start from the 10th user.",
    limit: "The number of users to return.",
    username: "The username to search for."
  },
  ADD_USER: {
    slug: "The slug of the group to add the user to.",
    username: "The username of the user to add to the group."
  },
  DELETE_USER: {
    slug: "The slug of the group to remove the user from.",
    username: "The username of the user to remove from the group."
  }
} as const;

export const IDENTITIES = {
  CREATE: {
    name: "The name of the identity to create.",
    organizationId: "The organization ID to which the identity belongs.",
    role: "The role of the identity. Possible values are 'no-access', 'member', and 'admin'."
  },
  UPDATE: {
    identityId: "The ID of the identity to update.",
    name: "The new name of the identity.",
    role: "The new role of the identity."
  },
  DELETE: {
    identityId: "The ID of the identity to delete."
  }
} as const;

export const UNIVERSAL_AUTH = {
  LOGIN: {
    clientId: "Your Machine Identity Client ID.",
    clientSecret: "Your Machine Identity Client Secret."
  },
  ATTACH: {
    identityId: "The ID of the identity to attach the configuration onto.",
    clientSecretTrustedIps:
      "A list of IPs or CIDR ranges that the Client Secret can be used from together with the Client ID to get back an access token. You can use 0.0.0.0/0, to allow usage from any network address.",
    accessTokenTrustedIps:
      "A list of IPs or CIDR ranges that access tokens can be used from. You can use 0.0.0.0/0, to allow usage from any network address.",
    accessTokenTTL: "The lifetime for an access token in seconds. This value will be referenced at renewal time.",
    accessTokenMaxTTL:
      "The maximum lifetime for an access token in seconds. This value will be referenced at renewal time.",
    accessTokenNumUsesLimit:
      "The maximum number of times that an access token can be used; a value of 0 implies infinite number of uses."
  },
  RETRIEVE: {
    identityId: "The ID of the identity to retrieve."
  },
  UPDATE: {
    identityId: "The ID of the identity to update.",
    clientSecretTrustedIps: "The new list of IPs or CIDR ranges that the Client Secret can be used from.",
    accessTokenTrustedIps: "The new list of IPs or CIDR ranges that access tokens can be used from.",
    accessTokenTTL: "The new lifetime for an access token in seconds.",
    accessTokenMaxTTL: "The new maximum lifetime for an access token in seconds.",
    accessTokenNumUsesLimit: "The new maximum number of times that an access token can be used."
  },
  CREATE_CLIENT_SECRET: {
    identityId: "The ID of the identity to create a client secret for.",
    description: "The description of the client secret.",
    numUsesLimit:
      "The maximum number of times that the client secret can be used; a value of 0 implies infinite number of uses.",
    ttl: "The lifetime for the client secret in seconds."
  },
  LIST_CLIENT_SECRETS: {
    identityId: "The ID of the identity to list client secrets for."
  },
  REVOKE_CLIENT_SECRET: {
    identityId: "The ID of the identity to revoke the client secret from.",
    clientSecretId: "The ID of the client secret to revoke."
  },
  RENEW_ACCESS_TOKEN: {
    accessToken: "The access token to renew."
  },
  REVOKE_ACCESS_TOKEN: {
    accessToken: "The access token to revoke."
  }
} as const;

export const AWS_AUTH = {
  LOGIN: {
    identityId: "The ID of the identity to login.",
    iamHttpRequestMethod: "The HTTP request method used in the signed request.",
    iamRequestUrl:
      "The base64-encoded HTTP URL used in the signed request. Most likely, the base64-encoding of https://sts.amazonaws.com/",
    iamRequestBody:
      "The base64-encoded body of the signed request. Most likely, the base64-encoding of Action=GetCallerIdentity&Version=2011-06-15.",
    iamRequestHeaders: "The base64-encoded headers of the sts:GetCallerIdentity signed request."
  }
} as const;

export const ORGANIZATIONS = {
  LIST_USER_MEMBERSHIPS: {
    organizationId: "The ID of the organization to get memberships from."
  },
  UPDATE_USER_MEMBERSHIP: {
    organizationId: "The ID of the organization to update the membership for.",
    membershipId: "The ID of the membership to update.",
    role: "The new role of the membership."
  },
  DELETE_USER_MEMBERSHIP: {
    organizationId: "The ID of the organization to delete the membership from.",
    membershipId: "The ID of the membership to delete."
  },
  LIST_IDENTITY_MEMBERSHIPS: {
    orgId: "The ID of the organization to get identity memberships from."
  },
  GET_PROJECTS: {
    organizationId: "The ID of the organization to get projects from."
  },
  LIST_GROUPS: {
    organizationId: "The ID of the organization to list groups for."
  }
} as const;

export const PROJECTS = {
  CREATE: {
    organizationSlug: "The slug of the organization to create the project in.",
    projectName: "The name of the project to create.",
    slug: "An optional slug for the project."
  },
  DELETE: {
    workspaceId: "The ID of the project to delete."
  },
  GET: {
    workspaceId: "The ID of the project."
  },
  UPDATE: {
    workspaceId: "The ID of the project to update.",
    name: "The new name of the project.",
    autoCapitalization: "Disable or enable auto-capitalization for the project."
  },
  GET_KEY: {
    workspaceId: "The ID of the project to get the key from."
  },
  GET_SNAPSHOTS: {
    workspaceId: "The ID of the project to get snapshots from.",
    environment: "The environment to get snapshots from.",
    path: "The secret path to get snapshots from.",
    offset: "The offset to start from. If you enter 10, it will start from the 10th snapshot.",
    limit: "The number of snapshots to return."
  },
  ROLLBACK_TO_SNAPSHOT: {
    secretSnapshotId: "The ID of the snapshot to rollback to."
  },
  ADD_GROUP_TO_PROJECT: {
    projectSlug: "The slug of the project to add the group to.",
    groupSlug: "The slug of the group to add to the project.",
    role: "The role for the group to assume in the project."
  },
  UPDATE_GROUP_IN_PROJECT: {
    projectSlug: "The slug of the project to update the group in.",
    groupSlug: "The slug of the group to update in the project.",
    roles: "A list of roles to update the group to."
  },
  REMOVE_GROUP_FROM_PROJECT: {
    projectSlug: "The slug of the project to delete the group from.",
    groupSlug: "The slug of the group to delete from the project."
  },
  LIST_GROUPS_IN_PROJECT: {
    projectSlug: "The slug of the project to list groups for."
  },
  LIST_INTEGRATION: {
    workspaceId: "The ID of the project to list integrations for."
  },
  LIST_INTEGRATION_AUTHORIZATION: {
    workspaceId: "The ID of the project to list integration auths for."
  }
} as const;

export const PROJECT_USERS = {
  INVITE_MEMBER: {
    projectId: "The ID of the project to invite the member to.",
    emails: "A list of organization member emails to invite to the project.",
    usernames: "A list of usernames to invite to the project."
  },
  REMOVE_MEMBER: {
    projectId: "The ID of the project to remove the member from.",
    emails: "A list of organization member emails to remove from the project.",
    usernames: "A list of usernames to remove from the project."
  },
  GET_USER_MEMBERSHIPS: {
    workspaceId: "The ID of the project to get memberships from."
  },
  GET_USER_MEMBERSHIP: {
    workspaceId: "The ID of the project to get memberships from.",
    username: "The username to get project membership of. Email is the default username."
  },
  UPDATE_USER_MEMBERSHIP: {
    workspaceId: "The ID of the project to update the membership for.",
    membershipId: "The ID of the membership to update.",
    roles: "A list of roles to update the membership to."
  }
};

export const PROJECT_IDENTITIES = {
  LIST_IDENTITY_MEMBERSHIPS: {
    projectId: "The ID of the project to get identity memberships from."
  },
  GET_IDENTITY_MEMBERSHIP_BY_ID: {
    identityId: "The ID of the identity to get the membership for.",
    projectId: "The ID of the project to get the identity membership for."
  },
  UPDATE_IDENTITY_MEMBERSHIP: {
    projectId: "The ID of the project to update the identity membership for.",
    identityId: "The ID of the identity to update the membership for.",
    roles: {
      description: "A list of role slugs to assign to the identity project membership.",
      role: "The role slug to assign to the newly created identity project membership.",
      isTemporary:
        "Whether the assigned role is temporary. If isTemporary is set true, must provide temporaryMode, temporaryRange and temporaryAccessStartTime.",
      temporaryMode: "Type of temporary expiry.",
      temporaryRange: "Expiry time for temporary access. In relative mode it could be 1s,2m,3h",
      temporaryAccessStartTime: "Time to which the temporary access starts"
    }
  },
  DELETE_IDENTITY_MEMBERSHIP: {
    projectId: "The ID of the project to delete the identity membership from.",
    identityId: "The ID of the identity to delete the membership from."
  },
  CREATE_IDENTITY_MEMBERSHIP: {
    projectId: "The ID of the project to create the identity membership from.",
    identityId: "The ID of the identity to create the membership from.",
    role: "The role slug to assign to the newly created identity project membership.",
    roles: {
      description: "A list of role slugs to assign to the newly created identity project membership.",
      role: "The role slug to assign to the newly created identity project membership.",
      isTemporary:
        "Whether the assigned role is temporary. If isTemporary is set true, must provide temporaryMode, temporaryRange and temporaryAccessStartTime.",
      temporaryMode: "Type of temporary expiry.",
      temporaryRange: "Expiry time for temporary access. In relative mode it could be 1s,2m,3h",
      temporaryAccessStartTime: "Time to which the temporary access starts"
    }
  }
};

export const ENVIRONMENTS = {
  CREATE: {
    workspaceId: "The ID of the project to create the environment in.",
    name: "The name of the environment to create.",
    slug: "The slug of the environment to create."
  },
  UPDATE: {
    workspaceId: "The ID of the project to update the environment in.",
    id: "The ID of the environment to update.",
    name: "The new name of the environment.",
    slug: "The new slug of the environment.",
    position: "The new position of the environment. The lowest number will be displayed as the first environment."
  },
  DELETE: {
    workspaceId: "The ID of the project to delete the environment from.",
    id: "The ID of the environment to delete."
  }
} as const;

export const FOLDERS = {
  LIST: {
    workspaceId: "The ID of the project to list folders from.",
    environment: "The slug of the environment to list folders from.",
    path: "The path to list folders from.",
    directory: "The directory to list folders from. (Deprecated in favor of path)"
  },
  CREATE: {
    workspaceId: "The ID of the project to create the folder in.",
    environment: "The slug of the environment to create the folder in.",
    name: "The name of the folder to create.",
    path: "The path of the folder to create.",
    directory: "The directory of the folder to create. (Deprecated in favor of path)"
  },
  UPDATE: {
    folderId: "The ID of the folder to update.",
    environment: "The slug of the environment where the folder is located.",
    name: "The new name of the folder.",
    path: "The path of the folder to update.",
    directory: "The new directory of the folder to update. (Deprecated in favor of path)",
    projectSlug: "The slug of the project where the folder is located.",
    workspaceId: "The ID of the project where the folder is located."
  },
  DELETE: {
    folderIdOrName: "The ID or name of the folder to delete.",
    workspaceId: "The ID of the project to delete the folder from.",
    environment: "The slug of the environment where the folder is located.",
    directory: "The directory of the folder to delete. (Deprecated in favor of path)",
    path: "The path of the folder to delete."
  }
} as const;

export const SECRETS = {
  ATTACH_TAGS: {
    secretName: "The name of the secret to attach tags to.",
    secretPath: "The path of the secret to attach tags to.",
    type: "The type of the secret to attach tags to. (shared/personal)",
    environment: "The slug of the environment where the secret is located",
    projectSlug: "The slug of the project where the secret is located",
    tagSlugs: "An array of existing tag slugs to attach to the secret."
  },
  DETACH_TAGS: {
    secretName: "The name of the secret to detach tags from.",
    secretPath: "The path of the secret to detach tags from.",
    type: "The type of the secret to attach tags to. (shared/personal)",
    environment: "The slug of the environment where the secret is located",
    projectSlug: "The slug of the project where the secret is located",
    tagSlugs: "An array of existing tag slugs to detach from the secret."
  }
} as const;

export const RAW_SECRETS = {
  LIST: {
    expand: "Whether or not to expand secret references",
    recursive:
      "Whether or not to fetch all secrets from the specified base path, and all of its subdirectories. Note, the max depth is 20 deep.",
    workspaceId: "The ID of the project to list secrets from.",
    workspaceSlug:
      "The slug of the project to list secrets from. This parameter is only applicable by machine identities.",
    environment: "The slug of the environment to list secrets from.",
    secretPath: "The secret path to list secrets from.",
    includeImports: "Weather to include imported secrets or not."
  },
  CREATE: {
    secretName: "The name of the secret to create.",
    projectSlug: "The slug of the project to create the secret in.",
    environment: "The slug of the environment to create the secret in.",
    secretComment: "Attach a comment to the secret.",
    secretPath: "The path to create the secret in.",
    secretValue: "The value of the secret to create.",
    skipMultilineEncoding: "Skip multiline encoding for the secret value.",
    type: "The type of the secret to create.",
    workspaceId: "The ID of the project to create the secret in."
  },
  GET: {
    secretName: "The name of the secret to get.",
    workspaceId: "The ID of the project to get the secret from.",
    workspaceSlug: "The slug of the project to get the secret from.",
    environment: "The slug of the environment to get the secret from.",
    secretPath: "The path of the secret to get.",
    version: "The version of the secret to get.",
    type: "The type of the secret to get.",
    includeImports: "Weather to include imported secrets or not."
  },
  UPDATE: {
    secretName: "The name of the secret to update.",
    secretComment: "Update comment to the secret.",
    environment: "The slug of the environment where the secret is located.",
    secretPath: "The path of the secret to update",
    secretValue: "The new value of the secret.",
    skipMultilineEncoding: "Skip multiline encoding for the secret value.",
    type: "The type of the secret to update.",
    projectSlug: "The slug of the project to update the secret in.",
    workspaceId: "The ID of the project to update the secret in."
  },
  DELETE: {
    secretName: "The name of the secret to delete.",
    environment: "The slug of the environment where the secret is located.",
    secretPath: "The path of the secret.",
    type: "The type of the secret to delete.",
    projectSlug: "The slug of the project to delete the secret in.",
    workspaceId: "The ID of the project where the secret is located."
  }
} as const;

export const SECRET_IMPORTS = {
  LIST: {
    workspaceId: "The ID of the project to list secret imports from.",
    environment: "The slug of the environment to list secret imports from.",
    path: "The path to list secret imports from."
  },
  CREATE: {
    environment: "The slug of the environment to import into.",
    path: "The path to import into.",
    workspaceId: "The ID of the project you are working in.",
    import: {
      environment: "The slug of the environment to import from.",
      path: "The path to import from."
    }
  },
  UPDATE: {
    secretImportId: "The ID of the secret import to update.",
    environment: "The slug of the environment where the secret import is located.",
    import: {
      environment: "The new environment slug to import from.",
      path: "The new path to import from.",
      position: "The new position of the secret import. The lowest number will be displayed as the first import."
    },
    path: "The path of the secret import to update.",
    workspaceId: "The ID of the project where the secret import is located."
  },
  DELETE: {
    workspaceId: "The ID of the project to delete the secret import from.",
    secretImportId: "The ID of the secret import to delete.",
    environment: "The slug of the environment where the secret import is located.",
    path: "The path of the secret import to delete."
  }
} as const;

export const AUDIT_LOGS = {
  EXPORT: {
    workspaceId: "The ID of the project to export audit logs from.",
    eventType: "The type of the event to export.",
    userAgentType: "Choose which consuming application to export audit logs for.",
    startDate: "The date to start the export from.",
    endDate: "The date to end the export at.",
    offset: "The offset to start from. If you enter 10, it will start from the 10th audit log.",
    limit: "The number of audit logs to return.",
    actor: "The actor to filter the audit logs by."
  }
} as const;

export const DYNAMIC_SECRETS = {
  LIST: {
    projectSlug: "The slug of the project to create dynamic secret in.",
    environmentSlug: "The slug of the environment to list folders from.",
    path: "The path to list folders from."
  },
  LIST_LEAES_BY_NAME: {
    projectSlug: "The slug of the project to create dynamic secret in.",
    environmentSlug: "The slug of the environment to list folders from.",
    path: "The path to list folders from.",
    name: "The name of the dynamic secret."
  },
  GET_BY_NAME: {
    projectSlug: "The slug of the project to create dynamic secret in.",
    environmentSlug: "The slug of the environment to list folders from.",
    path: "The path to list folders from.",
    name: "The name of the dynamic secret."
  },
  CREATE: {
    projectSlug: "The slug of the project to create dynamic secret in.",
    environmentSlug: "The slug of the environment to create the dynamic secret in.",
    path: "The path to create the dynamic secret in.",
    name: "The name of the dynamic secret.",
    provider: "The type of dynamic secret.",
    defaultTTL: "The default TTL that will be applied for all the leases.",
    maxTTL: "The maximum limit a TTL can be leases or renewed."
  },
  UPDATE: {
    projectSlug: "The slug of the project to update dynamic secret in.",
    environmentSlug: "The slug of the environment to update the dynamic secret in.",
    path: "The path to update the dynamic secret in.",
    name: "The name of the dynamic secret.",
    inputs: "The new partial values for the configurated provider of the dynamic secret",
    defaultTTL: "The default TTL that will be applied for all the leases.",
    maxTTL: "The maximum limit a TTL can be leases or renewed.",
    newName: "The new name for the dynamic secret."
  },
  DELETE: {
    projectSlug: "The slug of the project to delete dynamic secret in.",
    environmentSlug: "The slug of the environment to delete the dynamic secret in.",
    path: "The path to delete the dynamic secret in.",
    name: "The name of the dynamic secret.",
    isForced:
      "A boolean flag to delete the the dynamic secret from infisical without trying to remove it from external provider. Used when the dynamic secret got modified externally."
  }
} as const;

export const DYNAMIC_SECRET_LEASES = {
  GET_BY_LEASEID: {
    projectSlug: "The slug of the project to create dynamic secret in.",
    environmentSlug: "The slug of the environment to list folders from.",
    path: "The path to list folders from.",
    leaseId: "The ID of the dynamic secret lease."
  },
  CREATE: {
    projectSlug: "The slug of the project of the dynamic secret in.",
    environmentSlug: "The slug of the environment of the dynamic secret in.",
    path: "The path of the dynamic secret in.",
    dynamicSecretName: "The name of the dynamic secret.",
    ttl: "The lease lifetime ttl. If not provided the default TTL of dynamic secret will be used."
  },
  RENEW: {
    projectSlug: "The slug of the project of the dynamic secret in.",
    environmentSlug: "The slug of the environment of the dynamic secret in.",
    path: "The path of the dynamic secret in.",
    leaseId: "The ID of the dynamic secret lease.",
    ttl: "The renew TTL that gets added with current expiry (ensure it's below max TTL) for a total less than creation time + max TTL."
  },
  DELETE: {
    projectSlug: "The slug of the project of the dynamic secret in.",
    environmentSlug: "The slug of the environment of the dynamic secret in.",
    path: "The path of the dynamic secret in.",
    leaseId: "The ID of the dynamic secret lease.",
    isForced:
      "A boolean flag to delete the the dynamic secret from infisical without trying to remove it from external provider. Used when the dynamic secret got modified externally."
  }
} as const;
export const SECRET_TAGS = {
  LIST: {
    projectId: "The ID of the project to list tags from."
  },
  CREATE: {
    projectId: "The ID of the project to create the tag in.",
    name: "The name of the tag to create.",
    slug: "The slug of the tag to create.",
    color: "The color of the tag to create."
  },
  DELETE: {
    tagId: "The ID of the tag to delete.",
    projectId: "The ID of the project to delete the tag from."
  }
} as const;

export const IDENTITY_ADDITIONAL_PRIVILEGE = {
  CREATE: {
    projectSlug: "The slug of the project of the identity in.",
    identityId: "The ID of the identity to create.",
    slug: "The slug of the privilege to create.",
    permissions: `@deprecated - use privilegePermission
The permission object for the privilege.
- Read secrets
\`\`\`
{ "permissions": [{"action": "read", "subject": "secrets"]}
\`\`\`
- Read and Write secrets
\`\`\`
{ "permissions": [{"action": "read", "subject": "secrets"], {"action": "write", "subject": "secrets"]}
\`\`\`
- Read secrets scoped to an environment and secret path
\`\`\`
- { "permissions": [{"action": "read", "subject": "secrets", "conditions": { "environment": "dev", "secretPath": { "$glob": "/" } }}] }
\`\`\`
`,
    privilegePermission: "The permission object for the privilege.",
    isPackPermission: "Whether the server should pack(compact) the permission object.",
    isTemporary: "Whether the privilege is temporary.",
    temporaryMode: "Type of temporary access given. Types: relative",
    temporaryRange: "TTL for the temporay time. Eg: 1m, 1h, 1d",
    temporaryAccessStartTime: "ISO time for which temporary access should begin."
  },
  UPDATE: {
    projectSlug: "The slug of the project of the identity in.",
    identityId: "The ID of the identity to update.",
    slug: "The slug of the privilege to update.",
    newSlug: "The new slug of the privilege to update.",
    permissions: `@deprecated - use privilegePermission
The permission object for the privilege.
- Read secrets
\`\`\`
{ "permissions": [{"action": "read", "subject": "secrets"]}
\`\`\`
- Read and Write secrets
\`\`\`
{ "permissions": [{"action": "read", "subject": "secrets"], {"action": "write", "subject": "secrets"]}
\`\`\`
- Read secrets scoped to an environment and secret path
\`\`\`
- { "permissions": [{"action": "read", "subject": "secrets", "conditions": { "environment": "dev", "secretPath": { "$glob": "/" } }}] }
\`\`\`
`,
    privilegePermission: "The permission object for the privilege.",
    isTemporary: "Whether the privilege is temporary.",
    temporaryMode: "Type of temporary access given. Types: relative",
    temporaryRange: "TTL for the temporay time. Eg: 1m, 1h, 1d",
    temporaryAccessStartTime: "ISO time for which temporary access should begin."
  },
  DELETE: {
    projectSlug: "The slug of the project of the identity in.",
    identityId: "The ID of the identity to delete.",
    slug: "The slug of the privilege to delete."
  },
  GET_BY_SLUG: {
    projectSlug: "The slug of the project of the identity in.",
    identityId: "The ID of the identity to list.",
    slug: "The slug of the privilege."
  },
  LIST: {
    projectSlug: "The slug of the project of the identity in.",
    identityId: "The ID of the identity to list.",
    unpacked: "Whether the system should send the permissions as unpacked"
  }
};

export const PROJECT_USER_ADDITIONAL_PRIVILEGE = {
  CREATE: {
    projectMembershipId: "Project membership id of user",
    slug: "The slug of the privilege to create.",
    permissions:
      "The permission object for the privilege. Refer https://casl.js.org/v6/en/guide/define-rules#the-shape-of-raw-rule to understand the shape",
    isPackPermission: "Whether the server should pack(compact) the permission object.",
    isTemporary: "Whether the privilege is temporary.",
    temporaryMode: "Type of temporary access given. Types: relative",
    temporaryRange: "TTL for the temporay time. Eg: 1m, 1h, 1d",
    temporaryAccessStartTime: "ISO time for which temporary access should begin."
  },
  UPDATE: {
    privilegeId: "The id of privilege object",
    slug: "The slug of the privilege to create.",
    newSlug: "The new slug of the privilege to create.",
    permissions:
      "The permission object for the privilege. Refer https://casl.js.org/v6/en/guide/define-rules#the-shape-of-raw-rule to understand the shape",
    isPackPermission: "Whether the server should pack(compact) the permission object.",
    isTemporary: "Whether the privilege is temporary.",
    temporaryMode: "Type of temporary access given. Types: relative",
    temporaryRange: "TTL for the temporay time. Eg: 1m, 1h, 1d",
    temporaryAccessStartTime: "ISO time for which temporary access should begin."
  },
  DELETE: {
    privilegeId: "The id of privilege object"
  },
  GET_BY_PRIVILEGEID: {
    privilegeId: "The id of privilege object"
  },
  LIST: {
    projectMembershipId: "Project membership id of user"
  }
};

export const INTEGRATION_AUTH = {
  GET: {
    integrationAuthId: "The id of integration authentication object."
  },
  DELETE: {
    integration: "The slug of the integration to be unauthorized.",
    projectId: "The ID of the project to delete the integration auth from."
  },
  DELETE_BY_ID: {
    integrationAuthId: "The id of integration authentication object to delete."
  },
  CREATE_ACCESS_TOKEN: {
    workspaceId: "The ID of the project to create the integration auth for.",
    integration: "The slug of integration for the auth object.",
    accessId: "The unique authorized access id of the external integration provider.",
    accessToken: "The unique authorized access token of the external integration provider.",
    url: "",
    namespace: "",
    refreshToken: "The refresh token for integration authorization."
  }
} as const;

export const INTEGRATION = {
  CREATE: {
    integrationAuthId: "The ID of the integration auth object to link with integration.",
    app: "The name of the external integration providers app entity that you want to sync secrets with. Used in Netlify, GitHub, Vercel integrations.",
    isActive: "Whether the integration should be active or disabled.",
    appId:
      "The ID of the external integration providers app entity that you want to sync secrets with. Used in Netlify, GitHub, Vercel integrations.",
    secretPath: "The path of the secrets to sync secrets from.",
    sourceEnvironment: "The environment to sync secret from.",
    targetEnvironment:
      "The target environment of the integration provider. Used in cloudflare pages, TeamCity, Gitlab integrations.",
    targetEnvironmentId:
      "The target environment id of the integration provider. Used in cloudflare pages, teamcity, gitlab integrations.",
    targetService:
      "The service based grouping identifier of the external provider. Used in Terraform cloud, Checkly, Railway and NorthFlank",
    targetServiceId:
      "The service based grouping identifier ID of the external provider. Used in Terraform cloud, Checkly, Railway and NorthFlank",
    owner: "External integration providers service entity owner. Used in Github.",
    url: "The self-hosted URL of the platform to integrate with",
    path: "Path to save the synced secrets. Used by Gitlab, AWS Parameter Store, Vault",
    region: "AWS region to sync secrets to.",
    scope: "Scope of the provider. Used by Github, Qovery",
    metadata: {
      secretPrefix: "The prefix for the saved secret. Used by GCP.",
      secretSuffix: "The suffix for the saved secret. Used by GCP.",
      initialSyncBehavoir: "Type of syncing behavoir with the integration.",
      mappingBehavior: "The mapping behavior of the integration.",
      shouldAutoRedeploy: "Used by Render to trigger auto deploy.",
      secretGCPLabel: "The label for GCP secrets.",
      secretAWSTag: "The tags for AWS secrets.",
      kmsKeyId: "The ID of the encryption key from AWS KMS.",
      shouldDisableDelete: "The flag to disable deletion of secrets in AWS Parameter Store."
    }
  },
  UPDATE: {
    integrationId: "The ID of the integration object.",
    app: "The name of the external integration providers app entity that you want to sync secrets with. Used in Netlify, GitHub, Vercel integrations.",
    appId:
      "The ID of the external integration providers app entity that you want to sync secrets with. Used in Netlify, GitHub, Vercel integrations.",
    isActive: "Whether the integration should be active or disabled.",
    secretPath: "The path of the secrets to sync secrets from.",
    owner: "External integration providers service entity owner. Used in Github.",
    targetEnvironment:
      "The target environment of the integration provider. Used in cloudflare pages, TeamCity, Gitlab integrations.",
    environment: "The environment to sync secrets from."
  },
  DELETE: {
    integrationId: "The ID of the integration object."
  },
  SYNC: {
    integrationId: "The ID of the integration object to manually sync"
  }
};

export const AUDIT_LOG_STREAMS = {
  CREATE: {
    url: "The HTTP URL to push logs to.",
    headers: {
      desc: "The HTTP headers attached for the external prrovider requests.",
      key: "The HTTP header key name.",
      value: "The HTTP header value."
    }
  },
  UPDATE: {
    id: "The ID of the audit log stream to update.",
    url: "The HTTP URL to push logs to.",
    headers: {
      desc: "The HTTP headers attached for the external prrovider requests.",
      key: "The HTTP header key name.",
      value: "The HTTP header value."
    }
  },
  DELETE: {
    id: "The ID of the audit log stream to delete."
  },
  GET_BY_ID: {
    id: "The ID of the audit log stream to get details."
  }
};

export const PROJECT_ROLE = {
  CREATE: {
    projectSlug: "Slug of the project to create the role for.",
    slug: "The slug of the role.",
    name: "The name of the role.",
    description: "The description for the role.",
    permissions: "The permissions assigned to the role."
  },
  UPDATE: {
    projectSlug: "Slug of the project to update the role for.",
    roleId: "The ID of the role to update",
    slug: "The slug of the role.",
    name: "The name of the role.",
    description: "The description for the role.",
    permissions: "The permissions assigned to the role."
  },
  DELETE: {
    projectSlug: "Slug of the project to delete this role for.",
    roleId: "The ID of the role to update"
  },
  GET_ROLE_BY_SLUG: {
    projectSlug: "The slug of the project.",
    roleSlug: "The slug of the role to get details"
  },
  LIST: {
    projectSlug: "The slug of the project to list the roles of."
  }
};
