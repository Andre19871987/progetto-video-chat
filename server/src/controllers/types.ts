export type UserSignupBody = {
  name:       string;
    surname:    string;
    username:   string;
    email:      string;
    password:   string;
    phone:      string;
    address:    string;
    img:        string;
};

export type UserLoginBody = {
    email:      string;
    password:   string;
};
