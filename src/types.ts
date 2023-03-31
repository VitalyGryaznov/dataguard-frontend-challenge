export type tabDataType = {
  [tabId: string]: {
    title: string;
    icon: string;
    active: string[];
    disabled: string[];
    inactive: string[];
  };
};
