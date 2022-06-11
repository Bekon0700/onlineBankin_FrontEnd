import { FiLogIn, FiLogOut, FiUser, FiFileText, FiPlus } from "react-icons/fi";


export const navData = [
    {
        title: 'Login',
        link: '/login',
        role: ['visitor'],
        icon: <FiLogIn style={{paddingRight: '0.5rem'}}/>
    },
    {
        title: 'Registration',
        link: '/registration',
        role: ['visitor'],
        icon: <FiPlus style={{paddingRight: '0.5rem'}}/>
    },
    {
        title: 'Statement',
        link: '/statement',
        role: ['client'],
        icon: <FiFileText style={{paddingRight: '0.5rem'}}/>
    },
    {
        title: 'Deposit Money',
        link: '/depositMoney',
        role: ['officer'],
        icon: <FiFileText style={{paddingRight: '0.5rem'}}/>
    },
    {
        title: 'Withdraw Money',
        link: '/withdrawMoney',
        role: ['client'],
        icon: <FiFileText style={{paddingRight: '0.5rem'}}/>
    },
    {
        title: 'Send Money',
        link: '/sendMoney',
        role: ['client'],
        icon: <FiFileText style={{paddingRight: '0.5rem'}}/>
    },
    {
        title: 'Loan Return',
        link: '/loanBack',
        role: ['client'],
        forLoan: true,
        icon: <FiFileText style={{paddingRight: '0.5rem'}}/>
    },
    {
        title: 'Client Profile',
        link: '/checkClient',
        role: ['officer'],
        icon: <FiUser style={{paddingRight: '0.5rem'}}/>
    },
    {
        title: 'Profile',
        link: '/profile',
        role: ['client'],
        icon: <FiUser style={{paddingRight: '0.5rem'}}/>
    },
    {
        title: 'Log Out',
        link: '/login',
        role: ['client', 'admin', 'officer'],
        icon: <FiLogOut style={{paddingRight: '0.5rem'}}/>
    },
]