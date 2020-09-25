import PersonalData from '../../forms/personalData';

export default [
    {
        id: 1,
        value: 'Tutela',
        description: `Esta es la descipcion de la tutela
        Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia
        deserunt mollit anim id est laborum. Consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute
        irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur
        sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.`,
        steps:[
            {
                title: "Personal Data",
                uiform: PersonalData
            }
        ]
    }
];
