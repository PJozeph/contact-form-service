import { Body, Controller, Post } from '@nestjs/common';
import { ContactFromDto } from './dto/contact-form.dto';
import { EmailService } from './email.service';

@Controller('email')
export class EmailController {
  constructor(private emailService: EmailService) {}

  @Post()
  public sendEmail(@Body() form: ContactFromDto): Promise<void> {
    return this.emailService.sendEmail(form);
  }
}
