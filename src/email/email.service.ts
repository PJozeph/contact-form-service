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
        subject: contactFromDto.subject,
        text: `${contactFromDto.message} from: ${contactFromDto.firstName} ${contactFromDto.lastName} phone: ${contactFromDto.phoneNumber} email: ${contactFromDto.email}`,
      });
    } catch (error) {
      throw new InternalServerErrorException(error, "Couldn't send email");
    }
  }
}
