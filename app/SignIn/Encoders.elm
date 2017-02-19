module SignIn.Encoders exposing (..)

import Json.Encode exposing (..)
import SignIn.Types exposing (Model)


signInEncoder : Model -> Value
signInEncoder { email, password } =
    object
        [ ( "email", string email )
        , ( "password", string password )
        ]
