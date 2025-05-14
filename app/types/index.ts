declare global{

    interface LoginForm
    {
        mobile: string;
        password: string;
        'h-captcha-response': string;
    }
}