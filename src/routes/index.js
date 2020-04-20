import React from 'react'
import { Redirect } from 'react-router-dom'
import Home from '../application/Home'
import Rank from '../application/Rank'
import Recommend from '../application/Recommend'
import Singers from '../application/Singers'

export default [
    {
        path: '/',
        component: Home,
        routes: [
            {
                path: '/',
                exact: true, // 准确匹配
                render: () => (<Redirect to={"/singers"}/>) // 默认匹配地址
            },
            {
                path: '/rank',
                component: Rank
            },
            {
                path: '/recommend',
                component: Recommend
            },
            {
                path: '/singers',
                component: Singers
            }
        ]
    }
]