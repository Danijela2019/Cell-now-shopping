import React from 'react';
import { AiFillInstagram, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai';

export const footerAnchors = [
  {
    id: 1,
    category: 'Brands',
    links: [
      {
        href: '#',
        text: 'Samsung A22',
      },
      {
        href: '#',
        text: 'IPhone10',
      },
      {
        href: '#',
        text: 'Huawei SX',
      },
    ],
  },
  {
    id: 2,
    category: 'About',
    links: [
      {
        href: '#',
        text: 'Locations',
      },
      {
        href: '#',
        text: 'Company goal',
      },
      {
        href: '#',
        text: 'Our team',
      },
    ],
  },
  {
    id: 3,
    category: 'FAQ',
    links: [
      {
        href: '#',
        text: 'How to choose a phone',
      },
      {
        href: '#',
        text: 'Payment methods',
      },
      {
        href: '#',
        text: 'Other questions',
      },
    ],
  },
];

export const followUsData = [
  {
    id: 1,
    text: 'Facebook',
    link: <AiFillLinkedin />,
  },
  {
    id: 2,
    text: 'Instagram',
    link: <AiFillInstagram />,
  },
  {
    id: 3,
    text: 'Linkedin',
    link: <AiFillFacebook />,
  },
];
