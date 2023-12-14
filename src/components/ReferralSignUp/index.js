const ReferralSignUp = () => (
    <>
        <div className="desk" style={{height: '100%'}}>
            <div style={{display: 'table', width: '100%', height: '100%'}}>
                <div style={{display: 'table-cell', width: '70%', backgroundColor: 'white', padding: 20}}>
                    <img style={{width: '10vw', cursor: 'pointer', marginTop: '-3%', marginLeft: '-5%'}} onClick="new PageContents().changePage('/#')" src="public/img/arxena-logo/arxena-logo.png" />
                    <div className="shadow content_section" style={{width: 500, padding: 30, backgroundColor: 'rgba(255,255,255)', borderRadius: 5, textAlign: 'center', left: 0, right: 0}}>
                    <div id="signup_form_content">
                        <span style={{fontSize: '16pt', fontWeight: 300}}>Get up to 1000 free org chart credits by inviting your friends to arxena.</span>
                        <br />
                        <br />
                        <span style={{fontSize: '10pt'}}>For every friend who joins Arxena, we will give you both 1000 free org charts credits!
                        <br />
                        <br />
                        <div style={{width: '90%', left: '5%', position: 'relative'}}>
                            <div style={{textAlign: 'center'}}>
                            {/*<textarea id="referred_emails" class="form-control-custom" style="width:400px; height:70px" placeholder="Add emails separated by space"></textarea><br>*/}
                            <textarea id="textarea" defaultValue={""} /><br />
                            <button id="sub_btn">Show Tags</button>
                            </div>
                            <br />
                            <div style={{width: '100%', textAlign: 'center', position: 'relative', padding: 20}}>
                            <div id="referral_signup_button" className="form_button enter_click" style={{margin: 'auto', position: 'absolute', left: 0, right: 0, top: 0, bottom: 0}} onClick="new Modals().addFriendsToInviteAndStart()">Complete</div>
                            </div>
                        </div>
                        <br />
                        <br />
                        <span style={{fontSize: '9pt'}}>More ways to invite your friends</span>
                        <div style={{display: 'table', width: '100%', fontSize: '10pt'}}>
                            <div style={{display: 'table-cell', width: 170}}>
                            <div style={{width: 130, display: 'inline-block'}} className="small_button_white" onClick="new CopyLinks().copySignupInviteLink()">Copy invite link</div>
                            </div>
                            <div style={{display: 'table-cell'}}>
                            <input id="signup_invite_link" type="text" className="search-bar" style={{borderColor: 'rgb(232,232,232)', placeholderColor: 'rgb(232,232,232)'}} readOnly />
                            </div>
                        </div>
                        </span></div>
                    </div>
                </div>
            <div className="signup_lateral" style={{display: 'table-cell', width: '30%', padding: 20, textAlign: 'left'}}>
                <br /><br />
                <div style={{textAlign: 'center'}}>
                <img id="testimonial_photo" src="/public/img/NicolasDumoulin-300x300.jpg" style={{width: 150, borderRadius: '50%'}} />
                </div>
                <div style={{textAlign: 'left'}}>
                <img src="/public/img/quote.png" style={{width: 40, marginRight: 40, marginBottom: 20}} />
                </div>
                <i id="testimonial_quote">Before Arxena, I had used everything from DiscoverOrg to LucidCharts and nothing worked, locating the right decision makers took hours… now it takes me minutes, Arxena has helped close over 300k in ARR, this is by far the best sales outreach tool I have used.</i>
                <span style={{fontSize: '13pt'}}><br /><br /><strong style={{fontWeight: 500}} id="testimonial_name">Nicolas Dumoulin</strong> | </span>
                <span id="testimonial_title" style={{fontSize: '13pt'}}>Senior Managing Director, Michael Page</span>
                <br />
                <img id="testimonial_logo" src="/public/img/michael_page.webp" style={{height: 20}} />
                <div style={{textAlign: 'right'}}>
                <img src="/public/img/quote1.png" style={{width: 40, marginRight: 40}} />
                </div>
            </div>
            </div>
        </div>

        <div className="mobi" style={{height: '100%'}}>
            <div style={{width: '100%', height: '100%'}}>
                <div style={{backgroundColor: 'white', padding: 20}}>
                    <img style={{width: '25vw', marginTop: 5, cursor: 'pointer'}} onClick="new PageContents().changePage('/#')" src="public/img/arxena-logo/arxena-logo.png" />
                    <div className="shadow content_section" style={{width: '100%', padding: 30, backgroundColor: 'rgba(255,255,255)', borderRadius: 5, textAlign: 'center', left: 0, right: 0}}>
                    <div id="signup_form_content">
                        <span style={{fontSize: '16pt', fontWeight: 300}}>Get free org chart credits by inviting your friends to arxena.</span>
                        <br />
                        <br />
                        <span style={{fontSize: '10pt'}}>For every friend who joins Arxena, we'll give you both 1000 free org charts!
                        <br />
                        <br />
                        <div style={{width: '90%', left: '5%', position: 'relative'}}>
                            <div style={{textAlign: 'center'}}>
                            <textarea id="referred_emails_mobi" className="form-control-custom" style={{width: 250, height: 70}} placeholder="Add emails separated by space" defaultValue={""} /><br />
                            </div>
                            <br />
                            <div style={{width: '100%', textAlign: 'center', position: 'relative', padding: 20}}>
                            <div className="form_button" style={{margin: 'auto', position: 'absolute', left: 0, right: 0, top: 0, bottom: 0}} onClick="new Modals().addFriendsToInviteAndStart()">Complete</div>
                            </div>
                        </div>
                        <br />
                        <br />
                        <span style={{fontSize: '9pt'}}>More ways to invite your friends</span>
                        <div style={{display: 'table', width: '100%', fontSize: '10pt'}}>
                            <div style={{display: 'table-cell', width: 170}}>
                            <div style={{width: 130, display: 'inline-block'}} className="small_button_white" onClick="new CopyLinks().copySignupInviteLink()">Copy invite link</div>
                            </div>
                            <div style={{display: 'table-cell'}}>
                            <input id="signup_invite_link" type="text" className="search-bar" style={{borderColor: 'rgb(232,232,232)', placeholderColor: 'rgb(232,232,232)'}} readOnly />
                            </div>
                        </div>
                        </span></div>
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
                    <i id="testimonial_quote">Arxena helps me map with large F100 accounts saving me hours of manual work for resourcing projects.</i>
                    <br />
                    <span style={{fontSize: '13pt'}}><br /><br /><strong style={{fontWeight: 500}} id="testimonial_name">Mannan Pacha</strong> | </span>
                    <span id="testimonial_title" style={{fontSize: '13pt'}}>Manager - Ernst &amp; Young</span>
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
    </>

)

export default ReferralSignUp