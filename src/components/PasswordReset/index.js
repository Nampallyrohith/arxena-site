const PasswordReset = () => (
    <>
        {/* desktop version */}
        <div className="desk" satyle="height:100%">
            <div style={{display: 'table', width: '100%', height: '100%'}}>
            <div style={{display: 'table-cell', width: '70%', backgroundColor: 'white', padding: 20}}>
                <img style={{width: '10vw', marginTop: 5, cursor: 'pointer'}} onClick="new PageContents().changePage('/#')" src="public/img/arxena-logo/arxena-logo.png" />
                <div className="shadow content_section" style={{width: 500, padding: 30, backgroundColor: 'rgba(255,255,255)', borderRadius: 5, textAlign: 'center', left: '0, right:0', marginTop: 50}}>
                <div id="reset_password_form_content">
                    <span style={{fontSize: '16pt', fontWeight: 300}}>Reset your password</span>
                    <br />
                    <br />
                    <span style={{fontSize: '10pt'}}>Please enter below the email address you used to sign up for Arxena.</span>
                    <br />
                    <br />
                    <div style={{width: '90%', left: '5%', position: 'relative'}}>
                    <div className="row">
                        <div className="col-sm-12">
                        <input id="email" type="text" className="form-control-custom" placeholder="Email" oninput="new SessionStorageUpdates().updateEmail(this)" /><br />
                        </div>
                    </div>
                    <br />
                    <div style={{width: '100%', textAlign: 'center', position: 'relative', padding: 20}}>
                        <div className="form_button" style={{margin: 'auto', position: 'absolute', left: 0, right: 0, top: 0, bottom: 0}} onClick="new PageContents().sendResetLink()">Send reset link</div>
                    </div>
                    </div>
                    <div id="password_reset_error" style={{marginTop: 20}} />
                </div>
                </div>
            </div>
            <div className="signup_lateral" style={{display: 'table-cell', width: '30%', padding: 20, textAlign: 'left'}}>
                <br /><br />
                <div style={{textAlign: 'center'}}>
                <img id="testimonial_photo" src="/public/img/mannan_pacha_dp.webp" style={{width: 150, borderRadius: '50%'}} />
                </div>
                <div style={{textAlign: 'left'}}>
                <img src="/public/img/quote.png" style={{width: 40, marginRight: 40, marginBottom: 20}} />
                </div>
                <i id="testimonial_quote">Arxena helps me map in minutes large F100 accounts saving me hours of manual work for resourcing projects.</i>
                <span style={{fontSize: '13pt'}}><br /><br /><strong style={{fontWeight: 500}} id="testimonial_name">Mannan Pacha</strong> | </span>
                <span id="testimonial_title" style={{fontSize: '13pt'}}>Manager - Consulting</span>
                <br />
                <img id="testimonial_logo" src="/public/img/EY_logo_2019.png" style={{height: 20}} />
                <br />
                <br />
                <img id="linkedin_logo" src="/public/img/linkedin_logo.png" onClick="window.open('https://www.linkedin.com/in/mannanpacha1988')" style={{height: 20, cursor: 'pointer'}} />
                <div style={{textAlign: 'right'}}>
                <img src="/public/img/quote1.png" style={{width: 40, marginRight: 40}} />
                </div>
            </div>
            </div>
        </div>
        {/* mobile version */}
        <div className="mobi">
            <div style={{width: '100%', height: '100%'}}>
            <div style={{backgroundColor: 'white', padding: 20}}>
                <img style={{width: '25vw', marginTop: 5, cursor: 'pointer'}} onClick="new PageContents().changePage('/#')" src="public/img/arxena-logo/arxena-logo.png" />
                <div className="shadow content_section" style={{width: '100%', padding: 30, backgroundColor: 'rgba(255,255,255)', borderRadius: 5, textAlign: 'center', left: '0, right:0', marginTop: 50}}>
                <div id="reset_password_form_content_mobi">
                    <span style={{fontSize: '16pt', fontWeight: 300}}>Reset your password</span>
                    <br />
                    <br />
                    <span style={{fontSize: '10pt'}}>Please enter below the email address you used to sign up for arxena.</span>
                    <br />
                    <br />
                    <div style={{width: '90%', left: '5%', position: 'relative'}}>
                    <div className="row">
                        <div className="col-sm-12">
                        <input id="email" type="text" className="form-control-custom" placeholder="Email" oninput="new SessionStorageUpdates().updateEmail(this)" /><br />
                        </div>
                    </div>
                    <br />
                    <div style={{width: '100%', textAlign: 'center', position: 'relative', padding: 20}}>
                        <div className="form_button" style={{margin: 'auto', position: 'absolute', left: 0, right: 0, top: 0, bottom: 0}} onClick="new PageContents().sendResetLink()">Send reset link</div>
                    </div>
                    </div>
                    <div id="password_reset_error_mobi" style={{marginTop: 20}} />
                    <div style={{color: 'rgb(197,197,205)', cursor: 'pointer'}} onClick="new PageContents().changePage('/password_reset')">Forgot your password? <u style={{borderBottom: '1px dashed', textDecoration: 'none'}}>Reset it here</u></div>
                </div>
                </div>
            </div>
            <div className="signup_lateral" style={{padding: 20, textAlign: 'left'}}>
                <br /><br />
                <div style={{textAlign: 'center'}}>
                <img id="testimonial_photo" src="/public/img/mannan_pacha_dp.webp" style={{width: 150, borderRadius: '50%'}} />
                </div>
                <div style={{textAlign: 'left'}}>
                <img src="/public/img/quote.png" style={{width: 40, marginRight: 40, marginBottom: 20}} />
                </div>
                <i id="testimonial_quote">Arxena helps me map in minutes large F100 accounts saving me hours of manual work for resourcing projects.</i>
                <span style={{fontSize: '13pt'}}><br /><br /><strong style={{fontWeight: 500}} id="testimonial_name">Mannan Pacha</strong> | </span>
                <span id="testimonial_title" style={{fontSize: '13pt'}}>Manager - Consulting</span>
                <br />
                <img id="testimonial_logo" src="/public/img/tritonexec2.png" style={{height: 20}} />
                <div style={{textAlign: 'right'}}>
                <img src="/public/img/quote1.png" style={{width: 40, marginRight: 40}} />
                </div>
            </div>
            </div>
        </div>

    </>
)

export default PasswordReset