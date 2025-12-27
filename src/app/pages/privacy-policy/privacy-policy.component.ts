import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../components/footer/footer.component'; 
import { HeaderComponent } from '../../components/header/header.component';

export interface PolicySection  {
  title: string;
  id: string;
  resume: string;
  content?: string[];
  listItems?: string[];
}

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule,FooterComponent,HeaderComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})


export class PrivacyPolicyComponent {

  policySections: PolicySection[] = [
    {
      title: '1. Propósito, Escopo e USUÁRIO',
      id: 'proposito',
      resume: 'RESUMO: Esta Política de Privacidade tem como objetivo informar os TITULARES sobre as práticas do Oceano dos Dados relacionadas à coleta, uso, armazenamento, proteção e compartilhamento de seus dados pessoais, em conformidade com a legislação aplicável.',
      content: [
        'No Oceano dos Dados, sua privacidade e segurança são prioridades. Esta política explica de forma clara como coletamos, usamos, armazenamos e protegemos suas informações, em total conformidade com a LGPD (Lei Geral de Proteção de Dados).',
        'Como condição para o uso das funcionalidades exclusivas dos diversos serviços e funcionalidades prestados pelo Oceano dos Dados, <b>O USUÁRIO DECLARA QUE FEZ A LEITURA COMPLETA E ATENTA DA PRESENTE POLÍTICA DE PRIVACIDADE, ESTANDO PLENAMENTE CIENTE, CONFERINDO, ASSIM, SUA LIVRE E EXPRESSA CONCORDÂNCIA COM OS TERMOS AQUI ESTIPULADOS</b>, autorizando a coleta dos dados e informações aqui mencionados, bem como sua utilização para os fins abaixo especificados. Caso não esteja de acordo com estas diretivas, o USUÁRIO poderá descontinuar o seu acesso.'
      ]
    },
    {
      title: '2. Documentos de referência',
      id: 'referencias',
      resume: 'RESUMO: Esta Política de Privacidade está fundamentada nas seguintes legislações e normas:',
      listItems: [ 
        'Lei Federal nº 13.709/2018 – Lei Geral de Proteção de Dados Pessoais, “LGPD”.',
        'ABNT NBR ISO/IEC 27701.',
        'ABNT ISO/IEC 29100.'
      ]
    },
    {
      title: '3. Definições',
      id: 'definicoes',
      resume: 'RESUMO: Para melhor compreensão desta Política de Privacidade, seguem as definições dos principais termos utilizados:',
      content: [
        '<b>ANPD:</b> Autoridade Nacional de Proteção de Dados.',
        '<b>Banco de dados:</b> conjunto estruturado de dados pessoais, estabelecido em um ou em vários locais, em suporte eletrônico ou físico.',
        '<b>Cookies:</b> são pequenos arquivos de textos enviados para seu dispositivo, computador ou celular, pelo portal que você utiliza. Eles são armazenados e utilizados para lembrar informações sobre sua visita, como configurações utilizadas e preferências. Dessa forma, é possibilitada uma navegação mais simples e personalizada, eliminando a necessidade de informar os mesmos dados repetidas vezes.',
        '<b>Dados Pessoais Sensíveis:</b>Qualquer dado pessoal que diga respeito à origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou a organização de caráter religioso, filosófico ou político, bem como dado referente à saúde ou à vida sexual, dado genético ou biométrico.',
        '<b>Dados Pessoais:</b>Qualquer informação relativa a uma pessoa singular identificada ou identificável. É considerada identificável uma pessoa singular que possa ser identificada, direta ou indiretamente, em especial por referência a um identificador, como exemplo um nome, um número de identificação, dados de localização, identificadores por via eletrônica ou a um ou mais elementos específicos da identidade física, fisiológica, genética, mental, econômica, cultural ou social dessa pessoa.',
        '<b>Endereço IP: </b>a sigla IP significa Internet Protocol. Refere-se a um número exclusivo atribuído a cada computador por um protocolo de internet. Sua função é identificar um computador em uma rede.',
        '<b>Logs: </b>registros de atividade dos TITULARES em site, plataforma integrativa, aplicativos e demais serviços prestados pelo Controlador.',
        '<b>Tratamento de dados pessoais:</b>Qualquer operação efetuada sobre dados pessoais, por meios automatizados ou não automatizados, tais como a coleta, produção, recepção, classificação, utilização, acesso, reprodução, transmissão, distribuição, processamento, arquivamento, armazenamento, eliminação, avaliação ou controle da informação, modificação, comunicação, transferência, difusão ou extração.',
        '<b>USUÁRIO:</b>é a pessoa física ou jurídica titular da Conta Oceano dos Dados, podendo na presente política, englobado, para os efeitos da presente Política, ao conceito de “Titular”.'
      ]
    },
    {
      title: '4. Bases Jurídicas para Tratamento dos Dados Pessoais Coletados',
      id: 'Bases Jurídicas',
      resume: 'Os dados pessoais coletados são tratados pelo Oceano dos Dados em obediência às bases legais expostas no artigo 7º da Lei 13.709/18, hipóteses em que o tratamento de dados pessoais é permitido.'
      
    },
    {
      title:'5. Princípios básicos relativos ao tratamento de dados',
      id: 'Principios',
      resume:'RESUMO: Os princípios de proteção de dados descrevem as responsabilidades básicas para as organizações que tratam dados pessoais. Assim, o Oceano dos Dados cuida para que todas as atividades de tratamento de dados pessoais estejam em conformidade com os princípios trazidos pela legislação sobre privacidade e proteção de dados. São eles:',
      listItems:[
        '<strong>Princípio da boa-fé:</strong> todas as operações de tratamento são pautadas em boas intenções, na moral e bons costumes aceitos pela sociedade.',
        '<strong>Princípio da finalidade e adequação:</strong> O tratamento de dados pessoais atende aos propósitos legítimos, específicos, explícitos e informados ao Titular, e somente deve ocorrer de formas compatíveis com estas finalidades. Dados pessoais não poderão ser coletados/obtidos para uma finalidade, e depois utilizados para outra. Todos os usos de um dado devem ser compatíveis com o motivo original da coleta/obtenção.',
        '<strong>Princípio da necessidade:</strong> a coleta e utilização de dados pessoais são limitadas ao mínimo necessário para o cumprimento das finalidades pretendidas e expostas ao titular, garantindo também que tais informações sejam armazenadas pelo menor tempo possível/necessário.',
        '<strong>Princípio do livre acesso e qualidade dos dados:</strong> aos titulares é garantida a consulta facilitada e gratuita quanto à forma e duração do tratamento e integralidade de seus dados pessoais, estando assegurada a exatidão, clareza, relevância e atualização destes.',
        '<strong>Princípio da transparência:</strong> são garantidos, aos titulares dos dados, informações claras, precisas e facilmente acessíveis sobre a realização do tratamento e os respectivos agentes de tratamento, observados os segredos comercial e industrial.',
        '<strong>Princípio da segurança e prevenção:</strong> a segurança e confidencialidade dos dados pessoais devem ser garantidas por meio de medidas técnicas e organizacionais, abaixo exemplificadas, a fim de prevenir a ocorrência de incidentes de segurança envolvendo dados pessoais.',
        '<strong>Princípio da não discriminação:</strong> as atividades de tratamento de dados pessoais jamais poderão objetivar fins discriminatórios, ilícitos ou abusivos.',
        '<strong>Princípio da responsabilização:</strong> São armazenados os registros de todas as atividades de tratamento de dados pessoais e as respectivas medidas tomadas para adequar tais atividades às normas relativas à privacidade e à proteção de dados pessoais, comprovando a eficácia e eficiência de tais medidas.'
      ]
      },
      {
        title: '6. Coleta, Uso e Registro das Atividades',
        id: 'Coleta',
        resume: 'RESUMO: Os dados pessoais inseridos voluntariamente pelo TITULAR são classificados de acordo com a finalidade identificada para o seu tratamento.',
        content: [
          '6.1 O Oceano dos Dados não é responsável pela precisão, veracidade ou falta dela nas informações prestadas pelo TITULAR ou pela sua desatualização, sendo de responsabilidade única e exclusiva do TITULAR prestá-las com exatidão e atualizá-las, sempre que necessário.',
          '6.2 O Banco de Dados formado por meio da coleta de dados no Oceano dos Dados é de sua propriedade e responsabilidade, sendo que, seu uso, acesso e compartilhamento, quando necessários, serão feitos dentro dos limites e propósitos dos negócios da Instituição, devidamente descritos nesta Política de Privacidade.',
          '6.3 Os dados são coletados quando o próprio TITULAR os insere, de forma voluntária no site.',
          '6.4 TITULAR também é responsável pela preservação dos seus dados pessoais. Não incorre ao Oceano dos Dados, no descumprimento desta Política de Privacidade, quando o compartilhamento dos dados ocorrerem pelo próprio TITULAR ou quando a obtenção não autorizada por terceiros ocorrer por culpa não imputável ao Oceano dos Dados.'
        ]
      },
      {
        title:'7. Armazenamento dos dados e registros',
        id: 'Armazenamento',
        resume:'RESUMO: Os dados coletados são armazenados de forma segura e com mecanismos de controle',
        content:[
          '7.1 Os dados armazenados dos TITULARES são acessados somente por profissionais devidamente autorizados pelo Oceano dos Dados, respeitando os princípios de proporcionalidade, minimização, necessidade e relevância para os objetivos do Oceano dos Dados, além do compromisso de confidencialidade e preservação da privacidade nos termos desta Política de Privacidade.',
          '7.2 Os dados coletados são armazenados em local seguro e dotado de mecanismos de controle, no entanto, não se pode afirmar que exista algum sistema de segurança imune a falhas. Dessa forma, o Controlador se exime de toda e qualquer responsabilidade por danos e/ou prejuízos ocasionados por falhas, vírus, invasões de bancos de dados correspondentes aos serviços prestados, exceto quando comprovadamente tiver concorrido com dolo ou culpa.',
          '7.3 O Oceano dos Dados poderá armazenar os dados coletados em servidores próprios ou de terceiro contratado para esta finalidade, podendo ser servidores físicos, tecnologia cloud computing ou outra que vier a ser desenvolvida futuramente, com localização no Brasil ou no exterior, o que enseja, neste último caso, transferência ou processamento dos dados fora do Brasil.',
          '7.4 O Oceano dos Dados tomará precauções para que os dados sejam armazenados em locais com padrões elevados de segurança e em conformidade com a legislação atinente à proteção de dados pessoais.'
        ]
      },
      {
        title: '8. Segurança da Informação',
        id: 'Segurança da Informação',
        resume:'RESUMO: O Oceano dos Dados adota medidas de segurança adequadas para proteger a privacidade e os dados pessoais dos seus TITULARES em todas as etapas do ciclo de vida do tratamento dos dados pessoais.',
        content: [
          '8.1 O Oceano dos Dados adota medidas de segurança, técnicas e administrativas aptas a proteger os dados pessoais de acessos não autorizados e de situações acidentais ou ilícitas de destruição, perda, alteração, comunicação ou difusão.',
          '8.2 O Oceano dos Dados adota as melhores práticas de segurança',
          '8.3 O Oceano dos Dados não vende, troca ou aluga os dados pessoais dos seus TITULARES'
        ]
      },
      {
        title:'9. Transferência Internacional de dados pessoais',
        id: 'Transferência Internacional',
        resume:'RESUMO: A transferência internacional de dados pessoais é a transferência de dados para um país estrangeiro ou organização internacional. O Oceano dos Dados realiza tais transferências apenas quando necessário e em conformidade com a legislação aplicável.',
        content:[
          '9.1 O Oceano dos Dados utiliza, ou pode utilizar, alguns serviços de fornecedores que hospedam dados pessoais em outros países. Independente da localidade, esses dados pessoais são protegidos pelas legislações de privacidade vigentes conforme a localidade destes fornecedores.',
        ]
      },
      {
        title:'10. Compartilhamento de Informações dos usuarios',
        id: 'Compartilhamento',
        resume:'RESUMO: O Oceano dos Dados compartilha informações pessoais dos TITULARES apenas quando necessário e de forma segura, conforme descrito abaixo:',
        content:[
          'O Oceano dos Dados compartilha informações pessoais apenas quando necessário e de forma segura, incluindo:'
        ],
        listItems:[
          'Para cumprimento de requisições, solicitações e decisões de autoridades judiciais, administrativas ou arbitrais;',
          'Para identificação, prevenção e investigação de possíveis infrações ou atos ilícitos;',
          'Para prevenir riscos, fraudes e garantir a segurança.'
        ]
      },
      {
        title:'11. Disposições Gerais',
        id: 'Direitos',
        resume:'RESUMO: Esta seção aborda disposições gerais sobre a Política de Privacidade do Oceano dos Dados, incluindo alterações na política e comunicação com os TITULARES.',
        content:[
          '11.1 O Oceano dos Dados se reserva o direito de alterar o teor desta Política de Privacidade a qualquer momento, conforme a finalidade ou necessidade, tal qual para adequação e conformidade legal de disposição de lei ou norma que tenha força jurídica equivalente, cabendo ao TITULAR verificá-la, aceitá-la ou rejeitá-la, sempre que efetuar o acesso ao ambiente virtual do Oceano dos Dados.',
          'O TITULAR reconhece que toda comunicação realizada por e-mail (aos endereços informados no seu cadastro), SMS, aplicativos de comunicação instantânea ou qualquer outra forma digital, virtual também são válidas como prova documental, sendo eficazes e suficientes para a divulgação de qualquer assunto a que se refira aos serviços prestados pelo Oceano dos Dados, bem como às condições de sua prestação ou a qualquercoutro assunto nele abordado, ressalvadas as disposições expressamente diversas previstas nesta Política de Privacidade.'
        ]
      }
  ];


}
