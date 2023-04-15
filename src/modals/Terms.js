import React from 'react'
import '../style/modals/Terms.css'

const Terms = (props) => {
  return (
    <div className='container-modal-terms'>
      <div className="title-modal-terms">Condition of Use</div>
          <div className="container-text-terms">
              <div className="no-terms">1)</div>
              <div className="container-context-terms">
                  <div className="title-terms">Disclaimer.</div>
                  <div className="text-terms">These Terms of Service are only for demo purpose. Do not use them for a real project. These are only an example of  the legally binding terms and conditions for the use of the app and the Services.
                  </div>
            </div>
          </div>
           <div className="container-text-terms">
              <div className="no-terms">2)</div>
              <div className="container-context-terms">
                  <div className="title-terms">Acceptance of Terms.</div>
                  <div className="wrapper-text-terms">
                      <div className="text-terms">1.</div>
                      <div className="text-terms">By registering for and/or using the Services in any manner, including but not limited to visiting or browsing the app, you agree to these Terms of Service (including, for clarity, the Privacy Policy and, where applicable, the EU Data Processing Addendum) and all other operating rules, policies and procedures that may be published from time to time on the Site by us, each of which is incorporated by reference and each of which may be updated from time to time without notice to you.
                      </div>
                  </div>
                  <div className="wrapper-text-terms">
                      <div className="text-terms">2.</div>
                      <div className="text-terms">Certain of the Services may be subject to additional terms and conditions specified by us from time to time; your use of such Services is subject to those additional terms and conditions, which are incorporated into these Terms of Service by this reference.
                      </div>
                  </div>
                  <div className="wrapper-text-terms">
                      <div className="text-terms">3.</div>
                      <div className="text-terms">These Terms of Service apply to all users of the Services, including, without limitation, users who are contributors of content, information, and other materials or services, registered or otherwise.</div>
                  </div>
            </div>
      </div>
      <div className="close-terms-modal" onClick={() => props.modalTerms(false)}>OK</div>
    </div>
  )
}

export default Terms
