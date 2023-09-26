import { MailerService } from '@nestjs-modules/mailer';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ContactFromDto } from './dto/contact-form.dto';

@Injectable()
export class EmailService {
  constructor(private mailerService: MailerService) {}

  async sendEmail(contactFromDto: ContactFromDto): Promise<void> {
    try {
      await this.mailerService.sendMail({
        to: 'pallagijoe@gmail.com',
        from: 'pallagijoe@gmail.com',
        subject: 'Devlux - Contact Form',
        text: `${contactFromDto.message} from: ${contactFromDto.firstName} ${contactFromDto.lastName} phone: ${contactFromDto.phoneNumber} email: ${contactFromDto.email}`,
      });

      await this.mailerService.sendMail({
        to: contactFromDto.email,
        from: 'pallagijoe@gmail.com',
        subject: 'Devlux - Contact Form',
        text: ` Dear ${contactFromDto.firstName} ,Thank you for contacting me. I will get back to you as soon as possible.`,
      });
    } catch (error) {
      throw new InternalServerErrorException(error, "Couldn't send email");
    }
  }
}
