<svelte:head>
  <title>Pawbook signup</title>
</svelte:head>

<script lang="ts">
    import LanguageDropdown from "$components/LanguageDropdown.svelte";
    import Button from "$components/Button.svelte";
    import * as messages from "$lib/paraglide/messages";
    import Input from "$components/Input.svelte";
    import { link, push } from "svelte-spa-router";

    const incentiveLabel = messages.signup_incentive();
    const emailPlaceholder = messages.signup_email_placeholder();
    const passwordPlaceholder = messages.signup_password_placeholder();
    const confirmPasswordPlaceholder = messages.signup_confirm_password_placeholder();
    const usernamePlaceholder = messages.signup_username_placeholder();
    const firstNamePlaceholder = messages.signup_first_name_placeholder();
    const lastNamePlaceholder = messages.signup_last_name_placeholder();
    const alreadyAnAccountabel = messages.signup_already_have_account();
    const connexionLabel = messages.home_connection();
    const createMyAccount = messages.signup_create_account();
    const gcuLabel = messages.signup_gcu_privacy_policy();

    function onLoginButtonClick() {
        push("/login");
    }

    function onCreateAccountButtonClick() {
        push("/signup");
    }

</script>

    <main id="login-page-container">
        <div class="language-dropdown-container">
            <LanguageDropdown />
        </div>

        <div class="login-page-background"></div>

        <h1 class="login-page-title">Pawbook</h1>
        <p class="login-page-incentive">{incentiveLabel}</p>

        <div class="login-page-form-container">
            <form class="login-page-form" action="/login" method="POST">
                <Input type={"email"} name={"email"} placeholder={emailPlaceholder}/>
                <Input type={"password"} name={"password"} placeholder={passwordPlaceholder}/>
                <Input type={"password"} name={"confirmPassword"} placeholder={confirmPasswordPlaceholder}/>
                <Input type={"text"} name={"userName"} placeholder={usernamePlaceholder}/>
                <div class="login-page-form-names-container">
                  <Input type={"text"} name={"firstName"} placeholder={firstNamePlaceholder} customClass={"login-page-form-names-container-fist-name"} />
                  <Input type={"text"} name={"lastName"} placeholder={lastNamePlaceholder} customClass={"login-page-form-names-container-last-name"} />
                </div>

                <div class="login-page-form-gcu-container">
                    <Input type={"checkbox"} name={"gcu"} customClass={"login-page-form-input-no-margin"} placeholder={gcuLabel}/>
                </div>

                <Button label={createMyAccount} onClick={onLoginButtonClick} customClass="extra-margin-top" isCTA/>
            </form>
        </div>

        <div class="login-page-no-account-container">
            <p class="login-page-no-account-sentence">{alreadyAnAccountabel}</p>
            <Button label={connexionLabel} onClick={onLoginButtonClick}/>
        </div>

        <footer class="login-page-footer">
            <p class="login-page-footer-content">© Pawbook 2024 - 2025</p>
            <p class="login-page-footer-content">All rights reserved</p>
          </footer>
    </main>

<style lang="scss">
    #login-page-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .language-dropdown-container {
      position: absolute;
      top: 1rem;
      right: 1rem;
    }

    .login-page {
        &-background {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: url('/paws.png');
            background-size: 68rem auto;
            background-position: center;
            background-repeat: no-repeat;
            z-index: -2;
            opacity: 0.2;
        }

        &-title {
            font-family: var(--title-font-family);
            text-align: center;
            font-size: 3.5rem;
            margin: 0;
        }

        &-incentive {
            font-size: 1rem;
            margin: 0.5rem 0 0 0;
            text-align: center;
            
        }

        &-form-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border: 1px solid var(--second-text-color);
            border-radius: 0.75rem;
            margin: 2rem 0 1rem 0;
            padding : 1.25rem;
            width: 90%;
            max-width: 40rem;
            backdrop-filter: blur(3px);
        }

        &-form {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;

            &-names-container {
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              align-items: center;
              width: 100%;
              gap: 0.5rem;
            }

            &-gcu-container {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                margin: 0.5rem 0 0 0;
                width: 100%;
            }
        }

        &-no-account {
            &-container {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin: 0;
            }

            &-sentence {
                font-size: 0.9rem;
                margin: 0 0 0.3rem 0;
            }       
        } 

        &-footer {
            position: absolute;
            bottom: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-size: 0.8rem;
            padding: 0 0 0.5rem 0;

            &-content {
            margin: 0;
            }
        }
    }

    :global(.extra-margin-top) {
        margin-top: 1rem;
    }

    :global(.login-page-form-input-no-margin) {
        margin-bottom: 0.3rem !important;
    }

    :global(.login-page-form-names-container-fist-name) {
        width: 35% !important;
    }
    :global(.login-page-form-names-container-last-name) {
        width: 65% !important;
    }
</style>