import React from 'react';
import LandingPage from './components/LandingPage'
import Login from './components/Login'
import PasswordReset from './components/PasswordReset';
import PasswordResetLink from './components/PasswordResetLink'
import SignUp from './components/SignUp'
import ReferralSignUp from './components/ReferralSignUp'
import './App.css';

function App() {
  return (
    <>
      <div id="new_front_page" language="text">
        <div className="desk" id="main_container">
          <div style={{padding: 20, height: '85vh'}}>
            <div style={{display: 'table', width: '100%'}}>
            
              <div style={{display: 'table-cell', verticalAlign: 'middle'}} />
              <div id="sign_up_button_front_page" style={{display: 'table-cell', verticalAlign: 'middle', width: 190, textAlign: 'right'}}>
                <div className="landing_white_button" style={{display: 'inline-block', backgroundColor: 'rgb(36,116,204)', borderColor: 'rgb(36,116,204)', color: 'white', width: 150}} onClick="new PageContents().changePage('/signup')">Sign up</div>
              </div>
              <div id="log_in_button_front_page" style={{display: 'table-cell', verticalAlign: 'middle', width: 190, textAlign: 'right', paddingRight: 20}}>
                <div className="landing_white_button" style={{display: 'inline-block', backgroundColor: 'white', border: '1px solid rgb(36,116,204)', color: 'rgb(36,116,204)', width: 150}} onClick="new PageContents().changePage('/login')">Log in</div>
              </div>
            </div>
            <div style={{display: 'table', width: '100%', paddingLeft: 20, paddingRight: 20, height: '100%'}}>
              <div style={{display: 'table', width: '40%', marginLeft: '30%', textAlign: 'center', verticalAlign: 'middle', paddingTop: '8%'}}>
                {/* fake fields are a workaround for chrome autofill getting the wrong fields */}
                <input style={{display: 'none'}} type="text" name="fakeusernameremembered" />
                <input style={{display: 'none'}} type="password" name="fakepasswordremembered" />
                {/*<em style="color:#2474CC;font-size:20px;  ">Search any company's org chart</em>*/}
                <img style={{width: '15vw', marginTop: 5, cursor: 'pointer'}} onClick="new PageContents().changePage('/#')" src="public/img/arxena-logo/arxena-logo.png" />
                <input id="search_bar_front_page" defaultValue className="search-bar-front" autoComplete="new-company-entered-by-user" onBlur="new SearchBarLoadersDropdowns().homePageInputElemOnblur(this)" onFocus="new SearchBarLoadersDropdowns().homeInputElemOnfocus(this)" placeholder="🔍 Search any company's org chart" style={{display: 'table', width: '100%', borderColor: 'rgb(232,232,232)', placeholderColor: 'rgb(232,232,232)', height: '3rem', marginTop: '8%'}} oninput="new SearchBarLoadersDropdowns().updateHomePageSearchKeyword(this)" onkeypress="if (event.keyCode === 13) homePageSearch()" />
                <input id="search_bar_front_page_raw_text" defaultValue className="search-bar-front" autoComplete="new-raw_text-entered-by-user" onBlur="new SearchBarLoadersDropdowns().homePageInputElemOnblur(this)" onFocus="new SearchBarLoadersDropdowns().homeInputElemOnfocus(this)" placeholder="🔍 Which people are you looking for?" style={{display: 'none', width: '100%', borderColor: 'rgb(232,232,232)', placeholderColor: 'rgb(232,232,232)', height: '3rem', marginTop: '8%'}} onkeypress="if (event.keyCode === 13) new SearchBarLoadersDropdowns().updateHomePageSearchRawTextKeyword(this)" />
                <p id="error_home_page" style={{fontSize: 12, float: 'left', marginLeft: 20, display: 'none'}} />
                <div id="front_page_search_bar_loader" style={{textAlign: 'right', marginTop: '-6.5%', marginLeft: '85%', marginBottom: '2%', width: '10%'}}>
                  <div id="button_dropdown_search_jd" onClick="new SearchBarLoadersDropdowns().placeDropdownBelowSearchforJDInput()" style={{cursor: 'pointer', textAlign: 'right', marginTop: '-6.25%'}}><img style={{width: 25}} src="/public/img/new_upload.png" /></div>
                </div>
              
                <div id="home_page_dropdown_elements" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                <div id="home_page_jd_dropdown_element" />
              </div>
              <div style={{marginTop: '5%'}}>
                <center><img src="/public/img/powered_by_gpt4.png" alt="Open AI Logo" width={200} /></center>
              </div>
            </div>
          </div>
          <div style={{width: '100%', bottom: '0%', textAlign: 'center'}}>
            <div style={{display: 'table', width: '100%'}}>
              <div style={{display: 'table-cell', width: '100%', paddingLeft: 20, paddingTop: '2%', textAlign: 'left'}}>
                <div style={{paddingLeft: 25, display: 'inline-block'}}>OrgGPT - Talent Identification Software for Ambitious Companies<br />
                  <a style={{fontSize: '10pt'}} href="/pricing">Pricing</a> | <a style={{fontSize: '10pt'}} href="/eula">Terms of Service</a> | <a style={{fontSize: '10pt'}} href="/privacy">Privacy Policy</a> | <a style={{fontSize: '10pt'}} href="javascript:" onClick="new UtilityFunctions().openHelpModal()">How to Use</a> | <a style={{fontSize: '10pt'}} href="/download_chrome_extension" onClick="new UtilityFunctions().openHelpModal()">Download Extension</a><br />
                  <br />
                </div>
                <div style={{display: 'table-cell', paddingLeft: 25, float: 'right', marginRight: '5%'}}>
                  <div style={{display: 'table-cell', width: 70}}>
                    <a href="https://www.linkedin.com/company/arxena" target="_blank"><img style={{width: 35, cursor: 'pointer'}} src="public/img/linkedin-icon-png-circle-2.png" /></a>
                  </div>
                  <div style={{display: 'table-cell', width: 70}}>
                    <a href="https://twitter.com/arxenainc" target="_blank"><img style={{width: 43, cursor: 'pointer'}} src="public/img/tw.png" /></a>
                  </div>
                  <div style={{display: 'table-cell', width: 70}}>
                    <a href="https://facebook.com/arxenainc" target="_blank"><img style={{width: 35, cursor: 'pointer'}} src="public/img/facebook.png" /></a>
                  </div>
                  <div style={{display: 'table-cell', width: 70}}>
                    <a href="https://www.youtube.com/channel/UCpaPM7iFg9D309FUaIVeRpA" target="_blank"><img style={{width: 35, cursor: 'pointer'}} src="public/img/youtube.png" /></a>
                  </div>
                  <div style={{display: 'table-cell'}} />
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="new_landing_page" language="text">
        <LandingPage />
      </div>
      <Login />
      <div id="password_reset_page" language="text">
        <PasswordReset />
      </div>
      <div id="password_reset_link_page" language="text">
        <PasswordResetLink />
      </div>
      <div id="new_signup_page" language="text">
        <SignUp />
      </div>
      <div id="referral_signup_page" language="text">
        <ReferralSignUp /> 
      </div>
  </>
  );
}

export default App;
