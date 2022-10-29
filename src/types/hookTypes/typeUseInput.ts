export interface ITypeUseInput {
    isEmpty: boolean;
    minLength?: boolean;
    passwordValid?: boolean;
    formValid?: boolean;
    emailValid?: boolean;
    value: string;
    isDirty?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClick?: () => void;
    onBlur?: () => void;
}