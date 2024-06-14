import React, { createContext, useState, useEffect } from 'react';
import { getCookie } from '@/utils/cookies.js';
import { boolean } from 'zod';


export const AuthProvider = () => {
    const user = getCookie('token')
    return !!user;
};