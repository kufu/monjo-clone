---
title: Password policy FAQ
---
This page introduces frequently asked questions about the password policy.

# Password policy FAQ

## Q. Why are there no character type restrictions?

### A. Because the latest security trends recommend longer passwords rather than restricting the character type.

Below is a comparison of NIST (US government standards), National Center of Incident Readiness and Strategy for Cybersecurity (NISC), and SmartHR password policy standards.

|   | NIST SP800-63B | National Center of Incident Readiness and Strategy for Cybersecurity (NISC) |   SmartHR  （From February 16, 2022)   |
| --- | --- | --- | --- |
| **Minimum password length** | 8 characters if set by the user 6 characters if randomly generated (all numbers is also ok) | 10 characters or more for login passwords (used for online services) 15 characters or more for encryption keys (used for password-protected files and storage devices) | 10 characters or more |
| **Maximum password length** |   64 characters or more   | \- | 72 characters |
| **Character type** |   Should not be restricted (The system should allow all ASCII printable characters, including spaces and Unicode characters.)   | A total of 88 character types comprised of English upper and lowercase letters, numbers, and 26 types of symbols. | No restrictions |
| **Expiration date** |   Periodic changes should not be requested. Users are forced to change their passwords in the case of an incident.   | Periodic password changes are generally not required. The password will be changed immediately if it has been leaked. | Periodic changes should not be requested. |
| **Period in which consecutive password changes are not allowed** |   \-   | \- | \- |
| **Prohibiting reuse of an old password** | \- | \- | \- |
| **Banned passwords** |   ・Passwords that are on the previously leaked passwords list ・Words included in the dictionary ・Repeated or consecutive characters (aaaaa, 1234abcd)  ・Service names, user names, and their derivatives   | No using passwords that can be guessed from reused passwords, similar passwords, or personal information. | Banned password (blacklist) settings use the API of an external database that can check whether the password has been leaked in the past. |
| **Incorrect password attempts until an account is locked** |   100 times or less Show CAPTCHA before locking or use a time delay   | \- |   An account will be locked after 10 incorrect password attempts. (After 5 incorrect attempts, a “number of attempts remaining” message will be displayed.)   |
| **Account lockout period** | \- | \- | \- |

## Q. Why the stance of “periodic changes should not be requested" for password expiration dates?

### A. See the article below to find out why SmartHR does not have a feature that requires users to regularly change their passwords.

[What is the history behind changing passwords periodically? Tips for using SmartHR safely｜SmartHR Mag](https://mag.smarthr.jp/guide/cloud-hrl/detail/password_history/)

## Q. How are banned passwords (the blacklist) set?

### A. Banned password (blacklist) settings use the API of an external database that can check whether the password has been leaked in the past.

# FAQ about the new password policy from February 2022

## Q. Who should change their password?

### A. All SmartHR users (personnel in charge and employees \[including employees who have resigned or retired)\]).

## Q. Is there a deadline for changing the password?

### A. The period for transitioning to a new password is planned to be implemented over about three months from February 16, 2022 to mid-May 2022. The specific deadline will be announced later on our website.

Please change your password during the transition period.

If it is not changed during this period, the next time you log in, a compulsory prompt to set a new password will be displayed.

## Q. If my existing password satisfies the new password policy, do I still need to change it?

### A. Yes, you need to change it.

Even if you currently have a password that satisfies the new password policy, you will still be required to change your password.

Note that **you can continue to use it by setting the same password again.**

## Q. Please tell me the procedure for changing my password.

### A. Please see the help page below.

:::related
[Q. What should I do when the message "The password policy has changed. Please change your password according to the new policy." is displayed?](https://knowledge.smarthr.jp/hc/ja/articles/4415589321241)
:::

## Q. Will the minimum password length for an employee number account’s initial password set by the personnel in charge also be changed to 10 characters?
A. The initial password for the employee number account remains unchanged with a minimum password length of eight characters.

When an employee changes the password set by the personnel in charge, the employee will have to set a password with 10 characters or more.

If the employee forgets the password that they set and the personnel in charge resets it for them, the password will be returned to the initial password (eight characters if it was originally set with eight characters).

## Q. What should I do if I forget my password after changing it?

### A. Please see the help page below.

The procedure to follow is different depending on whether you have forgotten your login password or whether you have forgotten your password while trying to log in using your employee number and you have not registered your login/notification email address.

Please see the help pages below.

:::related
[Forgot your password?](https://knowledge.smarthr.jp/hc/ja/articles/360026265593)
[Forgot your employee number account password?](https://knowledge.smarthr.jp/hc/ja/articles/360026104374)
:::
