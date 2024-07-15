import profile from '../../assets/images/profile.png';

const Header = () => {
    return (
        <header className='flex justify-between items-center py-4 border-b-2 max-w-7xl mx-auto mb-5'>
            <h1 className='text-3xl'>Knowledge Cafe</h1> 
            <img src={profile} alt="Profile image" />
        </header>
    );
};

export default Header;