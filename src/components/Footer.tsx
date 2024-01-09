function Footer() {
  return (
    <p className="mt-1 w-full flex text-gray-500 font-bold items-center justify-center border-2 border-white border-t-gray-200">
      Shopping Cart &copy; {new Date().getFullYear()}
    </p>
  );
}

export default Footer;
