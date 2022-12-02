import React from 'react'
import { Localize } from 'components/localization'

const events_data = [
    {
        id: 'day_01',
        title: <Localize translate_text="Day 1 - Introduction and lectures" />,
        date: <Localize translate_text="30th of November" />,
        period: <Localize translate_text="Registrations 9:30 - 10:00" />,
        data: [
            {
                timings: [
                    {
                        time: '10:00 - 10:20',
                        id: 'time_01',
                    },
                    {
                        time: '10:20 - 11:20',
                        id: 'time_02',
                    },
                ],
                speakers: [
                    {
                        id: 'name_01',
                        name: <Localize translate_text="Alcino" />,
                        topic: (
                            <Localize translate_text="Introduction - Overview of Brazil in Deriv" />
                        ),
                    },
                    {
                        id: 'name_02',
                        name: <Localize translate_text="Sebastian" />,
                        topic: <Localize translate_text="Brazil in numbers" />,
                    },
                ],
                free_time: 'Break 11:00 - 11:15',
            },
            {
                timings: [
                    {
                        time: '11:15 - 12:00',
                        id: 'time_01',
                    },
                    {
                        time: '12:00 - 13:00',
                        id: 'time_02',
                    },
                ],
                speakers: [
                    {
                        id: 'name_01',
                        name: <Localize translate_text="Raul" />,
                        topic: <Localize translate_text="Payment methods" />,
                    },
                    {
                        id: 'name_02',
                        name: <Localize translate_text="Ricardo" />,
                        topic: <Localize translate_text="Payment Agents" />,
                    },
                ],
                free_time: <Localize translate_text="Break 13:00 - 14:00" />,
            },
            {
                timings: [
                    {
                        time: '14:00 - 15:00',
                        id: 'time_01',
                    },
                ],
                speakers: [
                    {
                        id: 'name_01',
                        name: <Localize translate_text="Ricardo" />,
                        topic: <Localize translate_text="MetaTrader 5 on Deriv" />,
                    },
                ],
                free_time: <Localize translate_text="Break 13:00 - 14:00" />,
            },
            {
                timings: [
                    {
                        time: '15:15 - 16:00',
                        id: 'time_02',
                    },
                    {
                        time: '16:00 - 16:45',
                        id: 'time_03',
                    },
                ],
                speakers: [
                    {
                        id: 'name_01',
                        name: <Localize translate_text="Alejandro Marcelo" />,
                        topic: <Localize translate_text="Deriv P2P" />,
                    },
                    {
                        id: 'name_02',
                        name: <Localize translate_text="Claudia" />,
                        topic: <Localize translate_text="Account security and fraud prevention" />,
                    },
                ],
                free_time: <Localize translate_text="Networking 16:15 - 19:00" />,
            },
        ],
    },

    {
        id: 'day_02',
        title: <Localize translate_text="Day 2 - Virtual and in person" />,
        date: <Localize translate_text="December 1st" />,
        period: '',
        data: [
            {
                timings: [
                    {
                        time: '9:30 - 9:45',
                        id: 'time_01',
                    },
                    {
                        time: '9:45 - 10:30',
                        id: 'time_02',
                    },
                    {
                        time: '10:30 - 11:00',
                        id: 'time_03',
                    },
                ],
                speakers: [
                    {
                        id: 'name_01',
                        name: <Localize translate_text="Alcino and Sebastian" />,
                        topic: <Localize translate_text="Brief summary of the day" />,
                    },
                    {
                        id: 'name_02',
                        name: <Localize translate_text="Raul" />,
                        topic: <Localize translate_text="Deriv X" />,
                    },
                    {
                        id: 'name_02',
                        name: <Localize translate_text="Ricardo" />,
                        topic: <Localize translate_text="CTrader" />,
                    },
                ],
                free_time: <Localize translate_text="Break 11:00 - 11:15" />,
            },
            {
                timings: [
                    {
                        time: '11:15 - 12:30',
                        id: 'time_01',
                    },
                    {
                        time: '12:30 - 13:00',
                        id: 'time_02',
                    },
                ],
                speakers: [
                    {
                        id: 'name_01',
                        name: <Localize translate_text="Sasky" />,
                        topic: <Localize translate_text="API - Deriv for developers" />,
                    },
                    {
                        id: 'name_02',
                        name: <Localize translate_text="Sasky" />,
                        topic: (
                            <Localize translate_text="Best practices to protect customer data" />
                        ),
                    },
                ],
                free_time: <Localize translate_text="Break 13:00 - 14:00" />,
            },
            {
                timings: [
                    {
                        time: '14:00 - 15:00',
                        id: 'time_01',
                    },
                ],
                speakers: [
                    {
                        id: 'name_01',
                        name: <Localize translate_text="Ana" />,
                        topic: <Localize translate_text="Bots" />,
                    },
                ],
                free_time: <Localize translate_text="Break 15:00 - 15:15" />,
            },
            {
                timings: [
                    {
                        time: '15:15 - 16:00',
                        id: 'time_01',
                    },
                ],
                speakers: [
                    {
                        id: 'name_01',
                        name: <Localize translate_text="Sebastian" />,
                        topic: <Localize translate_text="Deriv Go" />,
                    },
                ],
                free_time: <Localize translate_text="Networking 16:15 - 19:00" />,
            },
        ],
    },
    {
        id: 'day_03',
        title: <Localize translate_text="Day 3 - In person" />,
        date: <Localize translate_text="December 2nd" />,
        period: '',
        data: [
            {
                timings: [
                    {
                        time: '10:00 - 10:30',
                        id: 'time_01',
                    },
                    {
                        time: '10:30 - 11:30',
                        id: 'time_02',
                    },
                    {
                        time: '11:30 - 12:30',
                        id: 'time_03',
                    },
                ],
                speakers: [
                    {
                        id: 'name_01',
                        name: <Localize translate_text="Sasky and Sebastian" />,
                        topic: (
                            <Localize translate_text="Summary of the day - One-on-One Meetings" />
                        ),
                    },
                    {
                        id: 'name_02',
                        name: <Localize translate_text="Deriv Brazil team" />,
                        topic: <Localize translate_text="Bots Workshop - One-on-One Meetings" />,
                    },
                    {
                        id: 'name_02',
                        name: <Localize translate_text="Deriv Brazil team" />,
                        topic: <Localize translate_text="API Workshop - Individual Meetings" />,
                    },
                ],
                free_time: <Localize translate_text="Break 12:30 - 13:30" />,
            },
            {
                timings: [
                    {
                        time: '13:30 - 14:30',
                        id: 'time_01',
                    },
                    {
                        time: '14:30 - 15:30',
                        id: 'time_02',
                    },
                ],
                speakers: [
                    {
                        id: 'name_01',
                        name: <Localize translate_text="Deriv Brazil team" />,
                        topic: <Localize translate_text="MT5 Workshop - One-on-One Meetings" />,
                    },
                    {
                        id: 'name_02',
                        name: <Localize translate_text="Deriv Brazil team" />,
                        topic: <Localize translate_text="cTrader Workshop - One-on-One Meetings" />,
                    },
                ],
                free_time: <Localize translate_text="Break 15:30 - 15:45" />,
            },
            {
                timings: [
                    {
                        time: '15:45 - 16:45',
                        id: 'time_01',
                    },
                    {
                        time: '16:45 - 17:45',
                        id: 'time_01',
                    },
                ],
                speakers: [
                    {
                        id: 'name_01',
                        name: (
                            <Localize translate_text="Deriv P2P Workshop - One-on-One Meetings" />
                        ),
                        topic: <Localize translate_text="Deriv X Workshop - One-on-One Meetings" />,
                    },
                    {
                        id: 'name_02',
                        name: <Localize translate_text="Deriv Brazil team" />,
                        topic: <Localize translate_text="Deriv X Workshop - One-on-One Meetings" />,
                    },
                ],
                free_time: <Localize translate_text="Free 17:45 - 20:00" />,
            },
            {
                timings: [
                    {
                        time: '20:00',
                        id: 'time_01',
                    },
                ],
                speakers: [
                    {
                        id: 'name_01',
                        name: <Localize translate_text="Deriv Brazil team" />,
                        topic: <Localize translate_text="Closing dinner" />,
                    },
                ],
                free_time: '',
            },
        ],
    },
]

export default events_data
