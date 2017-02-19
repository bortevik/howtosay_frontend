module SignIn.Types exposing (..)


type alias Model =
    { email : Email
    , password : Password
    }


type Email
    = Email String


type Password
    = Password String


type Msg
    = NoOp
