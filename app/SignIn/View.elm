module SignIn.View exposing (..)

import Html exposing (Html, div, h2, text, label, input, button, form)
import Html.Attributes exposing (class, type_, placeholder)
import Html.Events exposing (onInput, onSubmit)
import SignIn.Types exposing (Model, Msg(..))


view : Model -> Html Msg
view model =
    div [ class "columns" ]
        [ div [ class "column is-half is-offset-one-quarter" ]
            [ h2 [ class "title is-2" ] [ text "Sign In" ]
            , form [ onSubmit SignInSubmit ]
                [ div [ class "control" ]
                    [ label [ class "label" ] [ text "Email" ]
                    , input
                        [ type_ "text"
                        , class "input"
                        , placeholder "Email"
                        , onInput EmailInput
                        ]
                        []
                    ]
                , div [ class "control" ]
                    [ label [ class "label" ] [ text "Password" ]
                    , input
                        [ type_ "password"
                        , class "input"
                        , placeholder "Password"
                        , onInput PasswordInput
                        ]
                        []
                    ]
                , button [ class "button is-info" ] [ text "Sign In" ]
                ]
            ]
        ]
