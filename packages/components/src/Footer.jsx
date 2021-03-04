import React from 'react';
import {version} from 'react/package.json'
export default function Footer() {
    return <p>Brought to you by Module Federation! Got React version: {React.version}, requested {version}</p>
}