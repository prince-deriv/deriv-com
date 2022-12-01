import React, { ReactElement } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { NavLink, StyledLink } from './styles/nav-styles'
import LogoPartner from 'images/svg/layout/logo-conference.svg'
import { useActiveLinkState } from 'components/hooks/use-active-link-state'
import { localize } from 'components/localization'
import device from 'themes/device'
import { Header } from 'components/elements'

const StyledWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    width: 100%;
    z-index: 100;
    background-color: var(--color-black);

    @media ${device.tabletS} {
        justify-content: flex-start;
    }
`
const LeftSide = styled.div`
    display: flex;
    align-items: center;
    padding-left: 120px;
    color: var(--color-white);

    @media ${device.tabletL} {
        padding: 0 22px;
    }
`
const NavigationBar = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 22px 120px 22px 0;
    line-height: 1.2;
    margin-left: 13.3rem;
    white-space: nowrap;

    @media (max-width: 1300px) {
        font-size: 12px;
        margin-left: 0;
        padding: 22px 20px;
    }
`
type NavLinkCardTypes = {
    to: string
    title: ReactElement
    active?: string
    type?: string
    target?: string
    external?: string
    rel?: string
}

const NavLinkCard = ({ title, active, ...props }: NavLinkCardTypes) => {
    const current_page = useActiveLinkState('conference')
    return (
        <NavLink>
            <StyledLink
                active={current_page === active}
                activeClassName="active"
                aria-label={title}
                {...props}
            >
                {title}
            </StyledLink>
        </NavLink>
    )
}

const NavConference = () => {
    return (
        <StyledWrapper>
            <Link to="/">
                <LeftSide>
                    <img src={LogoPartner} alt="deriv logo" width="28px" height="28px" />
                    <Header as="header" type="paragraph-1" color="white" align="center" pl="15px">
                        {localize('Deriv Affiliate Conference 2022')}
                    </Header>
                </LeftSide>
            </Link>

            <NavigationBar>
                <NavLinkCard
                    active="access"
                    to="https://deriv.zoom.us/webinar/register/WN_xurZU0MfQu2CHzgvBWfpDg"
                    title={localize('Access')}
                />
                <NavLinkCard
                    active="schedule"
                    to="/conference/timeline"
                    title={localize('Timeline')}
                />
            </NavigationBar>
        </StyledWrapper>
    )
}

export default NavConference
