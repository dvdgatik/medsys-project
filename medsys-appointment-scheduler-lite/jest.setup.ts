import '@testing-library/jest-native/extend-expect';

jest.mock('@expo/vector-icons', () => {
    const React = require('react');
    return {
        MaterialIcons: ({ name, size, color }: any) =>
            React.createElement('MaterialIcons', { name, size, color }),
    };
});