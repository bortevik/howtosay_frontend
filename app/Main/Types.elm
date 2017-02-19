module Main.Types exposing (..)

import Navigation exposing (Location)
import SignIn.Types


type Route
    = QuestionsRoute
    | SignInRoute
    | NotFoundRoute


type alias Model =
    { route : Route
    , signInModel : SignIn.Types.Model
    , authToken : Maybe String
    }


type Msg
    = UrlChange Location
    | SignInMsg SignIn.Types.Msg
