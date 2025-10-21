import React from 'react'

const Footer = () => {
  return (
      <div>
          <footer>
            <div style={{display: "flex", gap: "100px", justifyContent: "space-evenly"}}>
              <div style={{width: "200px"}}><a href="https://www.apple.com/"><img src="https://www.apple.com/ac/structured-data/images/open_graph_logo.png?202110180743" alt="" /></a></div>
              <div style={{width: "200px"}}><a href="https://www.amazon.com/"><img src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo.png" alt="" /></a></div>
              <div style={{width: "200px"}}><a href="https://www.samsung.com/uz_ru/"><img src="https://upload.wikimedia.org/wikipedia/commons/6/61/Samsung_old_logo_before_year_2015.svg" alt="" /></a></div>
            </div>
          </footer>
    </div>
  )
}

export default Footer
