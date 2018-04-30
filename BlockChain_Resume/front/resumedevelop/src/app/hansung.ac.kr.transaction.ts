import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
import {Certificate,AwardDetails,UserInfoInEnt,UserInfoInSch} from './hansung.ac.kr.assets';
import {User,Organization,Enterprise,School} from './hansung.ac.kr.participants';
// export namespace hansung.ac.kr.transaction{
   export abstract class TxForOrg extends Transaction {
      orgId: string;
   }
   export abstract class TxForEnt extends Transaction {
      entId: string;
   }
   export abstract class TxForSch extends Transaction {
      schId: string;
   }
   export abstract class TxForUser extends Transaction {
      userId: string;
   }
   export class AddRequestUser extends TxForUser {
      user: User;
   }
   export class RevokeRequestUser extends TxForUser {
   }
   export class AddAuthorizedOrg extends TxForOrg {
      organization: Organization;
   }
   export class RevokeAuthorizedOrg extends TxForOrg {
   }
   export class AddAuthorizedEnt extends TxForEnt {
      enterprise: Enterprise;
   }
   export class RevokeAuthorizedEnt extends TxForEnt {
   }
   export class AddAuthorizedSch extends TxForSch {
      school: School;
   }
   export class RevokeAuthorizedSch extends TxForSch {
   }
   export class CreateResumeInfoUser extends TxForUser {
      dob: Date;
      supportField: string;
      salaryRequirement: string;
      majorActivities: string;
      socialExperience: string;
      skillsAndCapabilities: string;
      publicOnOff: boolean;
   }
   export class CreateResumeElement extends TxForUser {
      certificate: Certificate;
      awardDetails: AwardDetails;
      userInfoInEnt: UserInfoInEnt;
      userInfoInSch: UserInfoInSch;
   }
   export class UpdateResumeInfoUser extends TxForUser {
      dob: Date;
      supportField: string;
      salaryRequirement: string;
      majorActivities: string;
      socialExperience: string;
      skillsAndCapabilities: string;
      certificate: Certificate;
      awardDetails: AwardDetails;
      userInfoInEnt: UserInfoInEnt;
      userInfoInSch: UserInfoInSch;
      publicOnOff: boolean;
   }
   export class DeleteResumeElement extends TxForUser {
      certificateAssetId: string;
      awardDetailsAssetId: string;
      userInfoInEntAssetId: string;
      userInfoInSchAssetId: string;
   }
   export class selectResumeInfoUser extends Transaction {
   }
   export class selectMyCertificate extends Transaction {
   }
   export class selectMyAwardDetails extends Transaction {
   }
   export class selectMyUserInfoInEnt extends Transaction {
   }
   export class selectMyUserInfoInSch extends Transaction {
   }
   export class selectUserByCertificateName extends Transaction {
      certificateName: string;
   }
   export class SendEvent extends Event {
      certificate: Certificate;
      awardDetails: AwardDetails;
      userInfoInEnt: UserInfoInEnt;
      userInfoInSch: UserInfoInSch;
   }
   export class UserEvent extends Event {
      txForUser: TxForUser;
   }
   export class OrganizationEvent extends Event {
      txForOrg: TxForOrg;
   }
   export class EnterpriseEvent extends Event {
      txForEnt: TxForEnt;
   }
   export class SchoolEvent extends Event {
      txForSch: TxForSch;
   }
// }
