module Main.Types exposing (..)

import Http
import Navigation exposing (Location)
import SignIn.Types


type alias AuthToken =
    Maybe String


type Route
    = QuestionsRoute
    | SignInRoute
    | NotFoundRoute


type alias Model =
    { route : Route
    , signInModel : SignIn.Types.Model
    , authToken : AuthToken
    , currentUser : Maybe User
    , languages : List Language
    }


type Msg
    = UrlChange Location
    | SignInMsg SignIn.Types.Msg
    | ReceiveCurrentUser (Result Http.Error User)
    | ReceiveLanguages (List Language)


type alias User =
    { id : String
    , name : String
    , languageToIds : List Int
    , language : String
    }


type alias Language =
    { id : String
    , code : String
    , name : String
    }
