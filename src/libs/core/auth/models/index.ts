export interface Credentials {
  username: string;
  password: string;
  service: string;
}

export interface HttpResponseError {
  name: string;
  status: number;
  statusText: string;
  message: string;
  error: string | LoginResponseError;
}

export interface LoginResponseError {
  name: string;
  jse_shortmsg?: string;
  jse_cause?: unknown;
  jse_info?: {
    errCode: number;
    message: string;
    statusCode: number;
  };
  message: string;
}

export interface LoginError {
  errCode: number | undefined;
  statusCode: number | undefined;
  message: string | undefined;
  name: string;
}

export interface ScopesTree {
  conf: unknown;
  slug: string;
  type: string;
}

export interface UserScopeData {
  defaultPanel: string;
  firstPanel: string;
  panels: string[];
}

export interface DefaultPanel {
  slug: string;
  name: string;
}

export interface UserProfile {
  scopesTree: ScopesTree | undefined;
  userScopesData: {
    [key: string]: UserScopeData;
  };
  defaultPanel: DefaultPanel | undefined;
}

export interface UserToken {
  expires: number | undefined;
  expires_in: number | undefined;
}

export interface User {
  _id: string | undefined;
  username: string | undefined;
  lastAccess: Date | undefined;
  servicename: string | undefined;
  userToken: UserToken;
}
