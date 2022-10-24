import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { GetUserProfile } from '../../services/UserService';
import { useSession } from '../../contexts/SessionContext'

const SignIn = () => {
    const { register,
            handleSubmit,
            formState: { errors}
		} = useForm()

    const [, {login}] = useSession();
    const [isFalseDetail, setFalseDetail] = useState(false);

    const onSubmit = async (data) => {
        const res = await GetUserProfile(data);


        if(Object.getOwnPropertyNames(res).length > 0){
            login(res.Item);
        } else {
            setFalseDetail(true);

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
            </div>
            <div className='fontBold font15'>Password</div>
            <div className='mb2'>
                <input type="password" className="inputBox" placeholder="Enter Password" name="password"
                    {...register("password", { required: 'Please enter a password' })}
                />
                <p className='formErrorText'>{errors.password?.message}</p>
            </div>
            <div className="mb2">
                <input type="submit" className='btn btnPrimary largeBtn w100 fontBold mb1' value="Sign In"/>
                { isFalseDetail &&
                    <p className='formErrorText'>
                        Incorrect email or password. Please try again or click 'Forgot your password?'.
                    </p>
                }
            </div>
        </form>
    )
}

export default SignIn;