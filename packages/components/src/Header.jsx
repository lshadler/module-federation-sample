import React from 'react';
import {version} from 'react/package.json'

export default function Header() {
    return <h1>This Header came from components! React version: {React.version}, requested {version}</h1>;
}