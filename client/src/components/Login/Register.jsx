import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { GetUserProfile, SaveUser, UpdateUser } from '../../services/UserService';
import { useSession } from '../../contexts/SessionContext'

const Register = () => {
    const { register,
        handleSubmit,
        formState: { errors}
    } = useForm()

    const [, {login}] = useSession();
    const [isFalseDetail, setFalseDetail] = useState(false);

    const onSubmit = async (data) => {
        const newData = { email : data.email }
        const res = await GetUserProfile(newData);
        if(Object.getOwnPropertyNames(res).length >0){
            setFalseDetail(true);
        } else {
            const userData = {
                email: data.email,
                password: data.password,
                savedHome: [],
                savedSearch: [],
                profileImg: './user_profile.png',
            }
            const userId = await UpdateUser(data.email, userData);
            // const userId = await SaveUser(userData);
            login({...userData});
        }
    }

    return (
        <form className='loginMain' onSubmit={handleSubmit(onSubmit)}>
            <div className='fontBold font15'>Email</div>
            <div className='mb1'>
                <input type="email" className="inputBox" placeholder="Enter Email" name="email"
                    {...register("email", { required: 'Enter a valid email address' })}
                />
                <p className='formErrorText'>{errors.email?.message}</p>
                { isFalseDetail &&
                    <p className='formErrorText'>
                        Email already exist. Please use another email!
                    </p>
                }
            </div>
            <div className='fontBold font15'>Password</div>
            <div className='mb2'>
                <input type="password" className="inputBox" placeholder="Enter Password" name="password"
                    {...register("password", { required: 'Please enter a password' })}
                />
                <p className='formErrorText'>{errors.password?.message}</p>
            </div>
            <div className="mb2">
                <input type="submit" className='btn btnPrimary largeBtn w100 fontBold mb1' value="Submit"/>
            </div>
        </form>
    )
}

export default Register;