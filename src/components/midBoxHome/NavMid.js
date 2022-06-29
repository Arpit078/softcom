import React from 'react'
import { Icon } from "@iconify/react"
import "./NavMid.css"
function NavMid() {
  return (
    <div ><nav className='ele'>
        <a className="nav-link active icons " aria-current="page" href="/">
                  <Icon
                    icon="ant-design:home-filled"
                    color="#c29253"
                    width="30"
                  />
                </a>
                <a className="nav-link active icons" aria-current="page" href="/">
                  <Icon icon="bi:people-fill" color="#c29253" width="30" />
                </a>
                <a className="nav-link active icons" aria-current="page" href="/">
                  <Icon
                    icon="akar-icons:circle-plus-fill"
                    color="#c29253"
                    width="30"
                  />
                </a>
                <a className="nav-link active icons" aria-current="page" href="/">
                  <Icon
                    icon="ci:settings-filled"
                    color="#c29253"
                    width="30"
                  />
                </a>
    </nav></div>
  )
}

export default NavMid