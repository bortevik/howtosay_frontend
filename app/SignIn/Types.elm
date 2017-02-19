module SignIn.Types exposing (..)

import Http


type alias Model =
    { email : String
    , password : String
    }


type Msg
    = EmailInput String
    | PasswordInput String
    | SignInSubmit
    | SignIn (Result Http.Error String)
