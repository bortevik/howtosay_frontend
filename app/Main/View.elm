module Main.View exposing (..)

import Html exposing (Html, div, text, nav, a, span, h1, section)
import Html.Attributes exposing (class, href)
import Html.Events exposing (onClick)
import Main.Types exposing (Model, Msg(..), Route(..), Language, User)
import SignIn.View
import Questions.View


view : Model -> Html Msg
view model =
    div []
        [ navMenu model
        , section [ class "section" ]
            [ div [ class "container" ] [ pageView model ] ]
        ]


navMenu : Model -> Html Msg
navMenu model =
    nav [ class "nav has-shadow" ]
        [ div [ class "container" ]
            [ div [ class "nav-left" ]
                [ a [ class "nav-item", href "/" ]
                    [ h1 [ class "title is-4" ] [ text "Howtosay" ]
                    ]
                ]
            , userMenu model
            ]
        ]


pageView : Model -> Html Msg
pageView model =
    case model.route of
        QuestionsRoute ->
            Html.map QuestionsMsg (Questions.View.view model.questionsModel)

        NotFoundRoute ->
            h1 [ class "title is-1" ] [ text "There is no such page" ]

        SignInRoute ->
            Html.map SignInMsg (SignIn.View.view model.signInModel)


userMenu : Model -> Html Msg
userMenu { currentUser, languages } =
    let
        links =
            case currentUser of
                Just user ->
                    [ span [ class "nav-item" ] [ currentLanguage languages user ]
                    , span [ class "nav-item" ] [ text user.name ]
                    , a [ class "nav-item signout", onClick SignOut ] [ text "Sign Out" ]
                    ]

                Nothing ->
                    [ a [ class "nav-item signin", href "/signin" ] [ text "Sign In" ]
                    , a [ class "nav-item signup" ] [ text "Sign Up" ]
                    ]
    in
        div [ class "nav-right" ] links


currentLanguage : List Language -> User -> Html Msg
currentLanguage languages { languageId } =
    let
        maybeLanguage =
            List.filter (\language -> language.id == languageId) languages
                |> List.head
    in
        case maybeLanguage of
            Just language ->
                text language.name

            Nothing ->
                text ""
