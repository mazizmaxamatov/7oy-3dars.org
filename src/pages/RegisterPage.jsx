import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegisterPage = () => {
    const [form, setForm] = useState({ name: '', email: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://nt-devconnector.onrender.com/api/users', form);
            navigate('/login');
        } catch (err) {
            setError('Ro‘yxatdan o‘tishda xatolik yuz berdi!');
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
                <h2 className="text-2xl font-bold text-center mb-6">Ro‘yxatdan o‘tish</h2>
                {error && <p className="text-red-500 text-center">{error}</p>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Ism"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full p-3 border rounded-lg"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full p-3 border rounded-lg"
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Parol"
                        value={form.password}
                        onChange={handleChange}
                        className="w-full p-3 border rounded-lg"
                        required
                    />
                    <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700">
                        Ro‘yxatdan o‘tish
                    </button>
                </form>
                <p className="text-center text-gray-500 mt-4">
                    Allaqachon akkauntingiz bormi? <a href="/login" className="text-blue-600">Kirish</a>
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;
