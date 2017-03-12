module Main.Types exposing (..)

import Http
import Navigation exposing (Location)
import SignIn.Types
import Questions.Types


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
    , questionsModel : Questions.Types.Model
    }


type Msg
    = NavigateTo Route
    | UrlChange Location
    | SignInMsg SignIn.Types.Msg
    | SignOut
    | ReceiveCurrentUser (Result Http.Error User)
    | ReceiveLanguages (List Language)
    | QuestionsMsg Questions.Types.Msg
    | LoadFromStorage ( String, Maybe String )


type alias User =
    { id : String
    , name : String
    , languageToIds : List Int
    , languageId : String
    }


type alias Language =
    { id : String
    , code : String
    , name : String
    }
