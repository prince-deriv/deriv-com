import React from 'react'
import styled from 'styled-components'
import { Flex } from 'components/containers'
import { Header } from 'components/elements'
import Dia1 from 'images/common/conference/dia1.png'
import Dia2 from 'images/common/conference/dia2.png'
import Dia3 from 'images/common/conference/dia3.png'
import device from 'themes/device'
import { Localize } from 'components/localization'

const EventsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 0 120px 80px 120px;

    @media ${device.tabletL} {
        align-items: center;
        padding: 0 0 40px;
    }
`
const Card = styled(Flex)`
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    max-width: 384px;
    height: 434px;
    margin: 0 12px;
`
const EventsHeader = styled(Header)`
    text-align: center;
    white-space: nowrap;
    color: var(--color-black-3);
`

type TEvents = {
    day: React.ReactElement
    icon: string
    title: React.ReactElement
    subtitle: React.ReactElement
}

const Events = () => {
    const events: TEvents[] = [
        {
            day: <Localize translate_text="Day 1" />,
            icon: Dia1,
            title: <Localize translate_text="November 30 - Virtual and in person" />,
            subtitle: <Localize translate_text="Introduction and lectures" />,
        },
        {
            day: <Localize translate_text="Day 2" />,
            icon: Dia2,
            title: <Localize translate_text="December 1 - Virtual and in person" />,
            subtitle: <Localize translate_text="Speeches" />,
        },
        {
            day: <Localize translate_text="Day 3" />,
            icon: Dia3,
            title: <Localize translate_text="December 2 - In person only" />,
            subtitle: <Localize translate_text="Workshops and individual meetings" />,
        },
    ]

    return (
        <EventsWrapper>
            {events.map((event) => {
                return (
                    <Card key={event.day}>
                        <EventsHeader as="div" type="heading-3" pb="32px">
                            {event.day}
                        </EventsHeader>
                        <img src={event.icon} alt="day" width={384} height={256} />
                        <EventsHeader as="div" weight="normal" type="subtitle-2" pt="24px" pb="8px">
                            {event.title}
                        </EventsHeader>
                        <EventsHeader as="div" weight="normal" type="subtitle-1">
                            {event.subtitle}
                        </EventsHeader>
                    </Card>
                )
            })}
        </EventsWrapper>
    )
}

export default Events
